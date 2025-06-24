import { useState } from "react";
import AuthLogoutButton from "@features/auth-logout/ui/AuthLogoutButton";
import styles from "./ProfilePage.module.scss";

export function ProfilePage() {
  // Example initial user data (replace with real user data from Redux or props)
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [avatar, setAvatar] = useState<File | null>(null);
  const [avatarPreview, setAvatarPreview] = useState<string | null>(null);

  // Validation state
  const [errors, setErrors] = useState<{
    name?: string;
    email?: string;
    password?: string;
  }>({});

  function validate() {
    const newErrors: { name?: string; email?: string; password?: string } = {};
    if (!name.trim()) newErrors.name = "Username is required.";
    if (!email.trim()) newErrors.email = "Email is required.";
    else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email))
      newErrors.email = "Invalid email address.";
    if (password && password.length < 6)
      newErrors.password = "Password must be at least 6 characters.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  function handleAvatarChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0] || null;
    setAvatar(file);
    if (file) {
      const reader = new FileReader();
      reader.onload = (ev) => setAvatarPreview(ev.target?.result as string);
      reader.readAsDataURL(file);
    } else {
      setAvatarPreview(null);
    }
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;
    // TODO: Dispatch update action or call API
    alert(
      `Name: ${name}\nEmail: ${email}\nPassword: ${password}\nAvatar: ${
        avatar?.name || "(unchanged)"
      }`
    );
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Profile</h1>
      <form className={styles.form} onSubmit={handleSubmit} noValidate>
        <label className={styles.label}>
          <span>Username</span>
          <input
            type="text"
            className={styles.input + (errors.name ? " " + styles.invalid : "")}
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your username"
          />
          {errors.name && <span className={styles.error}>{errors.name}</span>}
        </label>
        <label className={styles.label}>
          <span>Email</span>
          <input
            type="email"
            className={
              styles.input + (errors.email ? " " + styles.invalid : "")
            }
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
          />
          {errors.email && <span className={styles.error}>{errors.email}</span>}
        </label>
        <label className={styles.label}>
          <span>Password</span>
          <input
            type="password"
            className={
              styles.input + (errors.password ? " " + styles.invalid : "")
            }
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter new password"
          />
          {errors.password && (
            <span className={styles.error}>{errors.password}</span>
          )}
        </label>
        <label className={styles.label}>
          <span>Avatar</span>
          <input
            type="file"
            accept="image/*"
            className={styles.input}
            onChange={handleAvatarChange}
          />
        </label>
        {avatarPreview && (
          <img
            src={avatarPreview}
            alt="Avatar preview"
            className={styles.avatarPreview}
          />
        )}
        <button type="submit" className={styles.button}>
          Save Changes
        </button>
      </form>
      <div className={styles.logoutWrapper}>
        <AuthLogoutButton />
      </div>
    </div>
  );
}

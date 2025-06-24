import fs from "fs";
import path from "path";
import crypto from "crypto";

export interface User {
  id: string;
  email: string;
  password: string;
  fileIds: string[];
}

const USERS_FILE = path.join(__dirname, "../data/users.json");

const ensureDataDirExists = () => {
  const dir = path.dirname(USERS_FILE);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
};

const readUsersFromFile = (): Record<string, User> => {
  ensureDataDirExists();
  try {
    if (fs.existsSync(USERS_FILE)) {
      const data = fs.readFileSync(USERS_FILE, "utf-8");
      if (data) {
        return JSON.parse(data);
      }
    }
  } catch {
    console.error(
      "Error reading or parsing users.json. Starting with an empty user set."
    );
  }
  return {};
};

const writeUsersToFile = (users: Record<string, User>): void => {
  ensureDataDirExists();
  fs.writeFileSync(USERS_FILE, JSON.stringify(users, null, 2), "utf-8");
};

const usersCache: Record<string, User> = readUsersFromFile();

export const findUserByEmail = (email: string): User | undefined => {
  return Object.values(usersCache).find((user) => user.email === email);
};

export const findUserById = (id: string): User | undefined => {
  return usersCache[id];
};

export const addUser = (userData: Omit<User, "id" | "fileIds">): User => {
  const id = crypto.randomUUID();
  const newUser: User = {
    ...userData,
    id,
    fileIds: [],
  };
  usersCache[id] = newUser;
  writeUsersToFile(usersCache);
  return newUser;
};

export const addFileToUser = (userId: string, fileId: string): void => {
  const user = usersCache[userId];
  if (user && !user.fileIds.includes(fileId)) {
    user.fileIds.push(fileId);
    writeUsersToFile(usersCache);
  }
};

export const removeFileFromUser = (userId: string, fileId: string): void => {
  const user = usersCache[userId];
  if (user) {
    user.fileIds = user.fileIds.filter((id) => id !== fileId);
    writeUsersToFile(usersCache);
  }
};

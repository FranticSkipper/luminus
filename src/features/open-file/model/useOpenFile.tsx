export function useOpenFile() {
  function openFile() {
    console.log("openFile");
  }

  return {
    openFile,
  };
}

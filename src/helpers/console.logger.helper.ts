export const consoleLogger = (
  file: string,
  method: string,
  error: any = null
) => {
  console.log("Error Found:", {
    file,
    method,
    error,
  });
};

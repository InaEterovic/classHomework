const logger = (store: any) => (next: any) => (action: any) => {
  console.log("[Logger] Dispatching:", action);
  let result = next(action);
  console.log("[Logger] Next state:", store.getState());
  return result;
};

export default logger;

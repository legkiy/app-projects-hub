const useLocalStorage = () => {
  const getLSItem = (name: string) => {
    const lsItem = localStorage.getItem(name);
    if (lsItem) {
      return JSON.parse(lsItem);
    } else {
      console.log(`LocalStorage not found item: ${name}`);
    }
  };

  const setLSItem = (name: string, item: any) => {
    localStorage.setItem(name, JSON.stringify(item));
  };

  return { getLSItem, setLSItem };
};
export default useLocalStorage;

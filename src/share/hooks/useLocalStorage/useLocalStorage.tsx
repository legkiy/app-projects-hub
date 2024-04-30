const useLocalStorage = () => {
  const getLSItem = (name: string) => {
    const lsItem = localStorage.getItem(name);
    if (lsItem) {
      return JSON.parse(lsItem);
    } else {
      throw `LocalStorage not found item: ${name}`;
    }
  };

  return { getLSItem };
};
export default useLocalStorage;

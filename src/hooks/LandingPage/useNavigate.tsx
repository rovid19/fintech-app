const useNavigate = () => {
  const handleNavigate = (id: string) => {
    const el = document.getElementById(id);
    console.log(el);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return { handleNavigate };
};

export default useNavigate;

const getAge = (dob: Date) => {
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const dobnow = new Date(today.getFullYear(), dob.getMonth(), dob.getDate());
  const age = today.getFullYear() - dob.getFullYear();

  return (today < dobnow) ? age - 1 : age;
};

export default getAge;
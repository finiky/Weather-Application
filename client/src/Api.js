const getData = async (
  setWeather,
  setIssLoading,
  setError,
  setMsg,
  setStatus,
  zipid,
  countryid
) => {
  const response = await fetch(`${process.env.API_URL}/${zipid}/${countryid}`);
  if (response.ok) {
    const data = await response.json();
    setWeather(data);
    setIssLoading(false);
  }
  if (!response.ok) {
    const data = await response.json();
    setIssLoading(false);
    setError(true);
    setStatus(response.status);
    setMsg(data.message);
  }
};

export default getData;

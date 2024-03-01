export const getLocations = (setLongitude, setLatitude, setError) => {
  return new Promise((resolve, reject) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          resolve(pos.coords);
        },
        (err) => {
          reject(err);
        }
      );
    } else {
      reject(new Error("Geolocation is not supported by this browser"));
    }
  });
};

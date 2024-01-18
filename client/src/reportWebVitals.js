const reportWebVitals = async (onPerfEntry) => {
  if (typeof onPerfEntry === "function") {
    try {
      const { getCLS, getFID, getFCP, getLCP, getTTFB } = await import(
        "web-vitals"
      );
      [getCLS, getFID, getFCP, getLCP, getTTFB].forEach((metric) =>
        metric(onPerfEntry)
      );
    } catch (error) {
      // Handle import error
      console.error("Error importing web-vitals:", error);
    }
  }
};

export default reportWebVitals;

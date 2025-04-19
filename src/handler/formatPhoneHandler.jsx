export const formatPhoneNumber = (phoneNumber) => {
    // Remove any non-digit characters from the phone number
    const cleaned = phoneNumber.replace(/\D/g, "");
  
    const areaCode = cleaned.slice(1, 4);
    const firstPart = cleaned.slice(4, 7);
    const secondPart = cleaned.slice(7);
  
    return `(${areaCode})-${firstPart}-${secondPart}`;
  };
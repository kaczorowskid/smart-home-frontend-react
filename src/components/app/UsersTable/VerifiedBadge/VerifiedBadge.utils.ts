export const getBadgeColor = (isVerified: boolean) => {
  switch (isVerified) {
    case false:
      return "bg-badge-secondary";
    case true:
      return "bg-badge";
    default:
      return "bg-badge";
  }
};

export const getBadgeText = (isVerified: boolean) => {
  switch (isVerified) {
    case false:
      return "Not verified";
    case true:
      return "Verified";
    default:
      return "Not verified";
  }
};

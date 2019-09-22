const formatBN = (x: string): string => {
    return x.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

export { formatBN };

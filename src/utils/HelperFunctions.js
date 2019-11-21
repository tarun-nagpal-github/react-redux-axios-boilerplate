export const isArrayAndNotNull = (data = null) => {
    return (Array.isArray(data) && data.length) ? true : false;
}
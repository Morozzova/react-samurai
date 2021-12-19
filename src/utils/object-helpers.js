export const updateObjectInArray = (items, itemId, objPropName, objNewProps) => {
    return items.map(u => {
        if (u[objPropName] === itemId) {
            return {...u, ...objNewProps}
        }
        return u;
    })
}

export const postNextAction = (values) => {
    new Promise((resolve) => {
        setTimeout(() => {
            resolve(true)
        }, 5000);
    })
}
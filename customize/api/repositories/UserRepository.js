module.exports = {
    create: async (name) => {
        console.log(name);
    },
    checkLogin: async (data) => {
        await User.findOne({email: data.email});
    }
}
export default() => ({
    isLoading:true,
    entries:[
        
        {
        id: new Date().getTime(),
        date: new Date().toDateString(),
        text:'lorep ipsum dolor sit amet',
        picture:null
        },
        {
        id: new Date().getTime() + 1000,
        date: new Date().toDateString(),
        text:'lorep ipsum dolor sit amet Proident proident non cupidatat veniam.',
        picture:null
        },
        {
        id: new Date().getTime() + 2000,
        date: new Date().toDateString(),
        text:'lorep ipsum dolor sit amet lorep',
        picture:null
        },

]
})
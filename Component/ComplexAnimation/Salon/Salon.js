import faker from 'faker';
import niceColors from 'nice-color-palettes'
faker.seed(1);

const colors = [
    ...niceColors[1].slice(1, niceColors[1].length),
    ...niceColors[55].slice(0, 3),
];



const data = [
    {
        image: require('../../../assets/Images/Temp/Tute/Salon/435041.png')
    },
    {
        image: require('../../../assets/Images/Temp/Tute/Salon/435061.png')
    },
    {
        image: require('../../../assets/Images/Temp/Tute/Salon/435065.png')
    },
    {
        image: require('../../../assets/Images/Temp/Tute/Salon/435050.png')
    },
    {
        image: require('../../../assets/Images/Temp/Tute/Salon/435037.png')
    },
    {
        image: require('../../../assets/Images/Temp/Tute/Salon/435043.png')
    },
    {
        image: require('../../../assets/Images/Temp/Tute/Salon/435055.png')
    },
    {
        image: require('../../../assets/Images/Temp/Tute/Salon/435049.png')
    },
    {
        image: require('../../../assets/Images/Temp/Tute/Salon/435047.png')
    },
    {
        image: require('../../../assets/Images/Temp/Tute/Salon/435039.png')
    },
    {
        image: require('../../../assets/Images/Temp/Tute/Salon/435036.png')
    },
    {
        image: require('../../../assets/Images/Temp/Tute/Salon/435064.png')
    },
    {
        image: require('../../../assets/Images/Temp/Tute/Salon/435034.png')
    },
    {
        image: require('../../../assets/Images/Temp/Tute/Salon/435042.png')
    },
    {
        image: require('../../../assets/Images/Temp/Tute/Salon/435032.png')
    },
    {
        image: require('../../../assets/Images/Temp/Tute/Salon/435031.png')
    },
    {
        image: require('../../../assets/Images/Temp/Tute/Salon/435051.png')
    },
    {
        image: require('../../../assets/Images/Temp/Tute/Salon/435053.png')
    },
    {
        image: require('../../../assets/Images/Temp/Tute/Salon/435021.png')
    },
    {
        image: require('../../../assets/Images/Temp/Tute/Salon/435035.png')
    },
    {
        image: require('../../../assets/Images/Temp/Tute/Salon/435028.png')
    },
    {
        image: require('../../../assets/Images/Temp/Tute/Salon/435060.png')
    },
    {
        image: require('../../../assets/Images/Temp/Tute/Salon/435025.png')
    },
    {
        image: require('../../../assets/Images/Temp/Tute/Salon/435033.png')
    },
    {
        image: require('../../../assets/Images/Temp/Tute/Salon/435069.png')
    },
    {
        image: require('../../../assets/Images/Temp/Tute/Salon/435059.png')
    },
    {
        image: require('../../../assets/Images/Temp/Tute/Salon/435030.png')
    },
    {
        image: require('../../../assets/Images/Temp/Tute/Salon/435046.png')
    },
    {
        image: require('../../../assets/Images/Temp/Tute/Salon/435048.png')
    },
    {
        image: require('../../../assets/Images/Temp/Tute/Salon/435023.png')
    },
    {
        image: require('../../../assets/Images/Temp/Tute/Salon/435026.png')
    },
    {
        image: require('../../../assets/Images/Temp/Tute/Salon/435029.png')
    },
    {
        image: require('../../../assets/Images/Temp/Tute/Salon/435040.png')
    },
    {
        image: require('../../../assets/Images/Temp/Tute/Salon/435054.png')
    },
    {
        image: require('../../../assets/Images/Temp/Tute/Salon/435057.png')
    },
    {
        image: require('../../../assets/Images/Temp/Tute/Salon/435020.png')
    },
    {
        image: require('../../../assets/Images/Temp/Tute/Salon/435044.png')
    },
    {
        image: require('../../../assets/Images/Temp/Tute/Salon/435045.png')
    },
    {
        image: require('../../../assets/Images/Temp/Tute/Salon/435062.png')
    },
    {
        image: require('../../../assets/Images/Temp/Tute/Salon/435066.png')
    },
    {
        image: require('../../../assets/Images/Temp/Tute/Salon/435068.png')
    },
    {
        image: require('../../../assets/Images/Temp/Tute/Salon/435022.png')
    },
    {
        image: require('../../../assets/Images/Temp/Tute/Salon/435056.png')
    },
    {
        image: require('../../../assets/Images/Temp/Tute/Salon/435063.png')
    },
    {
        image: require('../../../assets/Images/Temp/Tute/Salon/435038.png')
    },
    {
        image: require('../../../assets/Images/Temp/Tute/Salon/435058.png')
    },
    {
        image: require('../../../assets/Images/Temp/Tute/Salon/435067.png')
    },
    {
        image: require('../../../assets/Images/Temp/Tute/Salon/435024.png')
    },
    {
        image: require('../../../assets/Images/Temp/Tute/Salon/435027.png')
    },
    {
        image: require('../../../assets/Images/Temp/Tute/Salon/435052.png')
    },
]

export const detailsIcon=[
    {color:'#EE887F', icon:'isv'},
    {color:'#f3b000', icon:'Trophy'},
    {color:'#95CDED', icon:'edit'},
]

export default data.map((item,index)=>({
    ...item,
    key:faker.random.uuid(),
    color:colors[index % colors.length],
    name:faker.name.findName(),
    jobTitle:faker.name.jobTitle(),
    categories:[...Array(3).keys()].map(()=>{
        return{
            key:faker.random.uuid(),
            title:faker.name.jobType(),
            subcats:[...Array(3).keys()].map(faker.name.jobType),
        }
    })
}))
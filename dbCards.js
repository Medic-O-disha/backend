import mongoose from 'mongoose'

const cardSchema = mongoose.Schema({
    hname: String,
    hadd: String,
    beds: String,
    bedsavail: String,
})

export default mongoose.model('Cards',cardSchema);

// [
//     {
//         "sno":"1"
//         "hname": "SCB medical",
//         "hadd": "Manglabag, Mangalabag, Cuttack, Odisha 753007",
//         "beds": "10",
//         "bedsavail": "2"
//     },
//     {
//         "sno":"2"
//         "hname": "Ashwini Hospital (CDA)",
//         "hadd": "Sector- 1, CDA CDA, Cuttack - 753014",
//         "beds": "20",
//         "bedsavail": "5"
//     },
//     {
//         "sno":"3"
//         "hname": "Shanti Memorial Hospital Pvt. Ltd.",
//         "hadd": "Patnaik Colony, Cuttack, Near Thoria Sahi Cuttack GPO, Cuttack - 753001",
//         "beds": "30",
//         "bedsavail": "6"
//     },
//     {
//         "sno":"4"
//         "hname": "Star Hospital",
//         "hadd": "Plot. 960, Rehaman Squre, College Squre to Jobra Anikat, Rehaman Chowk Jobra, Cuttack - 753003",
//         "beds": "15",
//         "bedsavail": "1"
//     },
//     {
//         "sno":"5"
//         "hname": "Panda Curie Cancer Hospital",
//         "hadd": "National Highway 5, Telengapentha Cuttack Gpo, Cuttack - 753001",
//         "beds": "18",
//         "bedsavail": "4"
//     }
// ]
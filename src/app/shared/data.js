var templejson = {
    feedback: {},
    gallery: {},
    about: {},
    contact: {},
    sevas: {},
    rituals: {},
    timings:{}
}

var feedback = { mobile: '9491000618', landline: '040888888', fax: '999999999', email: 'temple@gmail.com' }
var rituals = [{ sevaname: 'Suprabatha Seva/ Bindu Teertha Abhishekam', timings: 'Daily from 04:00 AM-05:00 AM' },
{ sevaname: 'Nijaroopa Darsanam', timings: 'Daily from 05:00 AM-05:30 AM' },
{ sevaname: 'Panchamrutha Abhishekam', timings: 'Daily from 05:30 AM-06:00 AM' },
{ sevaname: 'Nijaroopa Darsanam', timings: 'Daily from 07:00 AM-07:30 AM' },
{ sevaname: 'Ksheerabhishekam/Palabhishekam', timings: 'Daily from 07:30 AM-08:00 AM' },
{ sevaname: 'Nijaroopa Darsanam', timings: 'Daily from 08:30 AM-09:00 AM' },
{ sevaname: 'Panchamrutha Abhishekam', timings: 'Daily from 09:00 AM-09:30 AM' },
{ sevaname: 'Nijaroopa Darsanam', timings: 'Daily from 10:30 AM-11:00 AM' },
{ sevaname: 'Panchamrutha Abhishekam', timings: 'Daily from 11:00 AM-11:30 AM' },
{ sevaname: 'Kalyanosthavam', timings: 'Daily from 11:00 AM-12:30 PM' },
{ sevaname: 'Nijaroopa Darsanam', timings: 'Daily from 04:30 PM-05:00 PM' },
{ sevaname: 'Pramanam/Break', timings: 'Daily from 05:00 PM-05:45 PM' },
{ sevaname: 'Ksheerabhishekam/Palabhishekam', timings: 'Daily from 05:45 PM-06:15 PM' },
{ sevaname: 'Mahaharathi', timings: 'Daily from 06:15 PM-06:30 PM' },
{ sevaname: 'Sarva Darsanam', timings: 'Daily from 06:30 PM-09:30 PM' }]

timings =[{ dailytimings: 'Paalabhishekam(7.30 A.M to 8.00 A.M ,12.30 P.M to 1.00 P.M, 2.00PM to 2.30PM , 3.30PM to 4.00 PM and 5.45PM to 6.15 PM)' },
{ dailytimings: 'Suprabatham, Binduteerthaabishekham (4.00 A.M to 5.00 A.M)' },
{ dailytimings: 'SankataHaraGanapati Vratham(9.00 A.M to 12.00 Noon):' }]


templejson.feedback = feedback;
templejson.rituals = rituals;
templejson.timings = timings;
module.exports = { data: templejson }

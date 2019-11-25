let trips = [
  {
    id: 2,
    departureAirport: "JFK",
    arrivalAirport: "SEA",
    departureDate: "2019-12-01",
    arrivalDate: "2019-12-01",
    departureTime: "07:30",
    arrivalTime: "11:00",
    cabin: "Economy"
  },
  {
    id: 3,
    departureAirport: "SEA",
    arrivalAirport: "JFK",
    departureDate: "2019-12-08",
    arrivalDate: "2019-12-08",
    departureTime: "14:15",
    arrivalTime: "22:34",
    cabin: "Economy"
  },
  {
    id: 10,
    departureAirport: "PHL",
    arrivalAirport: "SFO",
    departureDate: "2020-01-09",
    arrivalDate: "2020-01-09",
    departureTime: "08:15",
    arrivalTime: "11:48",
    cabin: "Business"
  },
  {
    id: 11,
    departureAirport: "SFO",
    arrivalAirport: "PHL",
    departureDate: "2020-01-12",
    arrivalDate: "2020-01-12",
    departureTime: "08:30",
    arrivalTime: "16:42",
    cabin: "Business"
  },
  {
    id: 99,
    departureAirport: "PDX",
    arrivalAirport: "CDG",
    departureDate: "2020-02-02",
    arrivalDate: "2020-02-03",
    departureTime: "13:12",
    arrivalTime: "11:15",
    cabin: "First Class"
  },
  {
    id: 100,
    departureAirport: "CDG",
    arrivalAirport: "PDX",
    departureDate: "2020-03-05",
    arrivalDate: "2020-03-05",
    departureTime: "11:45",
    arrivalTime: "19:22",
    cabin: "First Class"
  }
];

let id = 101;

module.exports = {
  getFlights: (req, res) => {
    res.status(200).send(trips);
  },
  add: (req, res) => {
      const { departureAirport, arrivalAirport, departureDate, arrivalDate, departureTime, arrivalTime, cabin } = req.body

      let trip = { id, departureAirport, arrivalAirport, departureDate, arrivalDate, departureTime, arrivalTime, cabin }

      trips.push(trip)
      id++
      res.status(200).send(trips)
  },
  edit: (req, res) => {
    console.log(req.query, req.body)
      let index = null
      trips.forEach((trip, i) => {
          if(trip.id === +req.query.id) index = i
      })
      trips[index] = {
        id: trips[index].id,
        departureAirport: req.body.departureAirport || trips[index].departureAirport,
        arrivalAirport: req.body.arrivalAirport || trips[index].arrivalAirport,
        departureDate: req.body.departureDate || trips[index].departureDate,
        arrivalDate: req.body.arrivalDate || trips[index].arrivalDate,
        departureTime: req.body.departureTime || trips[index].departureTime,
        arrivalTime: req.body.arrivalTime || trips[index].arrivalTime,
        cabin: req.body.cabin || trips[index].cabin,
        }
        res.status(200).send(trips)
      },
      delete: (req, res) => {
          let index = null
          trips.forEach((trip, i) => {
              if(trip.id === +req.params.id) index = i
          })
          trips.splice(index, 1)
          res.status(200).send(trips)
      }
  };
const btn = document.querySelector('.btn');
const form = document.querySelector('.formInsurance');
const sumCustomsClearanceBlock = document.querySelector('.sumcustomsClearance');

form.addEventListener('submit', (event)=> {
   event.preventDefault();

   const fromDate = new FormData(event.target)
   const priceCar = Number( fromDate.get('priceCar') );
   const yearIssueCar = Number( fromDate.get('yearIssue') );
   const carTypeValue = fromDate.get('carType');

   const FindTypeCar = (carTypeValue)=> {
      switch (carTypeValue) {
         case "passengerCar":
            return 1;
         case "electricCar":
            return 0.7;

         case "motorbike":
            return 1.2;
      
         default:
            return 3;
      }
   }

   const carType = FindTypeCar(carTypeValue);

   const calculationCustomsClearance = (carType, priceCar, yearIssueCar)=> {
      const sumcustomsClearance = (carType * priceCar) * (yearIssueCar / 100);
      return sumcustomsClearance;
   }
   
   sumCustomsClearanceBlock.innerHTML = calculationCustomsClearance(carType, priceCar, yearIssueCar);
   
});


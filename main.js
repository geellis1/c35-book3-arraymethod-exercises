const businesses = [
    {
      purchasingAgent: { nameLast: "Kirlin", nameFirst: "Kristy" },
      phoneWork: "089.129.2290 x9400",
      orders: [7826.96, 8323.11, 5756.28, 6308.42, 5622.28],
      companyName: "Care-media",
      companyIndustry: "Education",
      addressZipCode: "56839",
      addressStateCode: "WI",
      addressFullStreet: "8417 Franklin Court Tunnel",
      addressCity: "Mouthcard"
    },
    {
      purchasingAgent: { nameLast: "Steuber", nameFirst: "Kamron" },
      phoneWork: "(833) 222-7579 x5874",
      orders: [6252.5, 9769.02, 9521.17, 7994.05, 7945.93],
      companyName: "Stanholding",
      companyIndustry: "Hospitality",
      addressZipCode: "09705",
      addressStateCode: "NY",
      addressFullStreet: "2889 Fawn Court Garden",
      addressCity: "Fellsmere"
    },
    {
      purchasingAgent: { nameLast: "Gutkowski", nameFirst: "Kaylee" },
      phoneWork: "235.266.6278",
      orders: [7634.43, 9766.72, 9953.45, 6559.8, 5054.9],
      companyName: "Highnix",
      companyIndustry: "Agriculture",
      addressZipCode: "49376",
      addressStateCode: "ME",
      addressFullStreet: "5734 Maple Avenue Throughway",
      addressCity: "Little Genesee"
    },
    {
      purchasingAgent: { nameLast: "Crona", nameFirst: "Lauren" },
      phoneWork: "1-449-987-3083 x23263",
      orders: [7384.52, 9252.72, 7272.65, 5251.84, 9680.08],
      companyName: "Conit",
      companyIndustry: "Defense",
      addressZipCode: "53326",
      addressStateCode: "IL",
      addressFullStreet: "5755 Hillside Drive Crossroad",
      addressCity: "Norval"
    },
    {
      purchasingAgent: { nameLast: "Krajcik", nameFirst: "Elvera" },
      phoneWork: "1-730-411-8580",
      orders: [6069.05, 8535.38, 5782.7, 7838.91, 7578.36],
      companyName: "Dong-tom",
      companyIndustry: "Energy",
      addressZipCode: "67071",
      addressStateCode: "KS",
      addressFullStreet: "4826 Arch Street Lights",
      addressCity: "Newburyport"
    },
    {
      purchasingAgent: { nameLast: "Kling", nameFirst: "Ellie" },
      phoneWork: "(868) 043-0950",
      orders: [6726.2, 8393.21, 8087.13, 6393.13, 8646.35],
      companyName: "Dan-dox",
      companyIndustry: "Manufacturing",
      addressZipCode: "98842",
      addressStateCode: "WV",
      addressFullStreet: "9767 Cedar Court Corner",
      addressCity: "Prince George"
    },
    {
      purchasingAgent: { nameLast: "Robel", nameFirst: "Otilia" },
      phoneWork: "(298) 305-1942 x53653",
      orders: [8676.05, 7430.69, 9379.81, 8074.29, 5998.75],
      companyName: "J-base",
      companyIndustry: "Health care",
      addressZipCode: "72993",
      addressStateCode: "FL",
      addressFullStreet: "9954 Buckingham Drive Mountains",
      addressCity: "Vesper"
    },
    {
      purchasingAgent: { nameLast: "Gusikowski", nameFirst: "Karolann" },
      phoneWork: "(743) 934-8981 x692",
      orders: [8650.08, 8042.69, 5555.72, 7467.86, 8851.43],
      companyName: "Span-fix",
      companyIndustry: "Construction",
      addressZipCode: "59860",
      addressStateCode: "MT",
      addressFullStreet: "4151 Orange Street Extension",
      addressCity: "Little Rock Air Force Base"
    },
    {
      purchasingAgent: { nameLast: "Hartmann", nameFirst: "Zena" },
      phoneWork: "727.635.6610 x6483",
      orders: [9415.89, 8935.45, 7413.91, 6830.96, 9746.57],
      companyName: "Sanaplane",
      companyIndustry: "Information",
      addressZipCode: "85156",
      addressStateCode: "NY",
      addressFullStreet: "4765 Fairview Avenue Locks",
      addressCity: "Dennisville"
    },
    {
      purchasingAgent: { nameLast: "Torphy", nameFirst: "Celia" },
      phoneWork: "(992) 079-1670 x71569",
      orders: [7431.21, 5911.85, 7954.86, 7141.52, 8416.79],
      companyName: "Ran-taxon",
      companyIndustry: "Manufacturing",
      addressZipCode: "96673",
      addressStateCode: "MD",
      addressFullStreet: "7157 Hudson Street Ford",
      addressCity: "Watrous"
    }
  ];

// /*Lightning Exercise: Add another section sibling to the current one and use object 
// dot notation to display each company's city. Use square bracket notation to display 
// the state code. Use dynamic square bracket notation to add the zip code.*/

const outEl = document.querySelector("#output")
outEl.innerHTML = "<h1>Active Businesses</h1>"

// businesses.forEach(business => {
//   outEl.innerHTML += `
//     <h2>${business.companyName}</h2>
//     <section>
//       ${business.addressFullStreet}
//       ${business.addressCity}
//       ${business["addressStateCode"]}
//       ${business["addressZipCode"]}
//       ${business["companyIndustry"]}
//     </section>
//   `
//   outEl.innerHTML += "<hr/>"
// });

// /*The filter function creates a new array from the existing one, so you can invoke 
// it and assign it to a new variable such as in the code below. The function that 
// you pass to filter() should return true or false. If it returns true, then the 
// current item will be placed in the new array.*/

// // Array to contain all the New York businesses

// const newYorkBusinesses = businesses.filter(business => {
//     let inNewYork = false
  
//     if (business.addressStateCode === "NY") {
//         inNewYork = true
//     }
  
//     return inNewYork
//   })


//   console.log(newYorkBusinesses);

//   /*Lightning Exercise: Use filter() to create another array named manufacturing
//   Businesses that will contain all businesses in the manufacturing industry. 
//   Display those to the DOM.
  
//   You start with saying it is false to start so that everything is false
//   in the beginning and then run the filter*/

//   const manufacturingBussinesses = businesses.filter(business => {
//     let manufacturingbiz = false

//     if (business.companyIndustry === "Manufacturing"){
//         manufacturingbiz = true
//     }
//     return manufacturingbiz
//     })

//     console.log(manufacturingBussinesses);

// const inEl = document.querySelector("#output2")
// inEl.innerHTML = "<h1>Manufacturing Businesses</h1>"

// /*function that prints the filtered reults to the DOM. You pass in the new array
// defined in filter function above */

// manufacturingBussinesses.forEach(business => {
//   inEl.innerHTML += `
//     <section>
//       ${business.companyName}
//     </section>
//   `
// });

// /*The map() method is perfect for that. The map method is used for transforming items in one array to a different structure, and storing the new items in another array. 
// Here's how you would do that for this feature.*/

// outEl.innerHTML += "<h1>Purchasing Agents</h1>";

// /*
//     Using map(), you extract the purchasing agent object
//     from each business and store it in a new array
// */
// const agents = businesses.map(business => {
//     return business.purchasingAgent
// })

// console.table(agents)

// /*function that prints the filtered reults to the DOM. You pass in the new array
// defined in map function above */

// agents.forEach(agent => {
//   outEl.innerHTML += `<h2>${agent.nameFirst} ${agent.nameLast}</h2>`;
//   outEl.innerHTML += "<hr/>";
// });

// /* Lightning Exercise: Instead of just returning the purchasing agent object, 
// return a new object that has the full name of the purchasing agent, the 
// company name, and the phone number. The data structure is shown below. 
// Use that new data structure to display the agent with their company and 
// phone number */

// /* Factory function that creates a new object [newAgent] with the attributes of  "fullName", "company", and
// "phoneNumber" that pulls the respective data from the [businesses] array above. It returns
// the new object [agents2].*/

// const agents2 = businesses.map (business => {
//     var newAgent = 
//     {   fullName: business.purchasingAgent,
//         company: business.companyName,
//         phoneNumber: business.phoneWork
//     }

//     return newAgent
// })

// console.table(agents2);

// /* The forEach loop below takes the new object created above in factory function [agents2] and
// posts them to the dom using the function outEl that is defined above*/

// agents2.forEach(agent => {
//     outEl.innerHTML += `<h2>${agent.fullName.nameFirst} ${agent.fullName.nameLast}</h2>`;
//     outEl.innerHTML += `<h3>${agent.company}</h3>`;
//     outEl.innerHTML += `<h3>${agent.phoneNumber}</h3>`;
//     outEl.innerHTML += "<hr/>";
//   });
/////////

/* The find() method does exactly what it's name suggests. It iterates an 
array and as soon as it finds one item that passes the condition that you 
provide, it returns that item to you. */

/* Lightning Exercise 1: Refactor your code to search for purchasing agents instead. 
   If the search text is found in the first name of any purchasing agent, show that agent.*/

document.querySelector("#companySearch")
    .addEventListener("keypress", keyPressEvent => {
        if (keyPressEvent.charCode === 13) {
            /* WHEN  USER PRESSES ENTER, FIND MATCHING BUSINESS */
            const foundBusiness = businesses.find(
                business =>
                    business.purchasingAgent.nameFirst.includes(keyPressEvent.target.value) ||
                    business.purchasingAgent.nameLast.includes(keyPressEvent.target.value)
            );
            outEl.innerHTML = `
                <h2>
                ${foundBusiness.purchasingAgent.nameFirst} ${foundBusiness.purchasingAgent.nameLast}
                </h2>
                <section>
                ${foundBusiness.addressFullStreet}

                </section>
                <section>
                ${foundBusiness.addressCity},
                ${foundBusiness.addressStateCode}
                ${foundBusiness.addressZipCode}
                </section>
            `;
        
        } 
        }
    );

////////

/* Lightning Exercise 1: Use the reduce method on the 
following array to determine how much total rain fell last month. */

const monthlyRainfall = [23, 13, 27, 20, 20, 31, 33, 26, 19, 12, 14, 12, 10]

const totalRainfall = monthlyRainfall.reduce(
    (currentTotal, nextValue) =>  currentTotal += nextValue,
    0
)

console.log(totalRainfall)

/* Lightning Exercise 2: Use the reduce method on the following array to 
build a sentence.*/

const words = ["The ", "quick ", "brown ", "fox ", "jumped ", "over ", "the ", "lazy ", "dog"]

const sentence = words.reduce(
    (currentTotal, nextValue, )  => currentTotal  += nextValue,
)

console.log(sentence)

////__________

/* Practice: Big Spenders: Use the filter method to get all the big spenders in the 
main array into a new one. */

// Array to contain all the big spenders

const bigSpenders = businesses.filter(business => {
    return business.orders.find(order=> order > 9000)
    
})

console.log(bigSpenders);
export function addToSuite(user) {
    let userData = user;
    let suiteArr = [];
    for (let x in userData) {
        if ((x === 'banking' || x === 'business_management' || x === 'islamic_tools') && userData[x] === true) {
            suiteArr.push(x)
        }
    }
    localStorage.setItem("suites", JSON.stringify(suiteArr))
    return {
      type: "ADD",
        suite: suiteArr
    };
  }
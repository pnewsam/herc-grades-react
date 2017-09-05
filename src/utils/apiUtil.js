export default function apiUtil(){
  const apiRoot = "https://cors-anywhere.herokuapp.com/https://canvas.instructure.com/api/v1/";

  let buildUrl = function(args){
    let url = apiRoot + "courses";
    // if (args.courseId) {
    //   url += `/${courseId}`;
    // }
    url += `?access_token=${process.env.REACT_APP_ACCESS_TOKEN}`;
    return(url);
  }

  return({
    buildUrl: buildUrl
  });
}
function ApiUtil() {
  const apiRoot = "https://cors-anywhere.herokuapp.com/https://sweetwaterschools.instructure.com/api/v1/";
  const token = `access_token=${process.env.REACT_APP_ACCESS_TOKEN}`;

  let l = "https://sweetwaterschools.instructure.com/api/v1/courses/1246894/users?enrollment_type[student]=student&access_token=12~shgVKqc411vZQPcvDf9yXTNCcJC9obj0D4P1u0QjRLgFHYB4CSjff4KgfLKzLjK7";


  function buildRequestUri(args) {
    let url = apiRoot + args.resource;
    if (args.resourceId) { url = url + "/" + args.resourceId; }
    if (args.nestedResource) { url = url + "/" + args.nestedResource; }
    if (args.queries) {
      for (let i = 0; i < args.queries.length; i++) {
        url = url + "?" + args.queries[i];
      }
      url = url + "&" + token;
    } else {
      url = url + "?" + token;
    }
    console.log(url);
    return (url);
  }

  return({
    buildRequestUri: buildRequestUri
  });
}

export default ApiUtil;
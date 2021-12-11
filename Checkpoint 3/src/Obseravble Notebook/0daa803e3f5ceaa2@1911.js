// https://observablehq.com/@6791566e58d943af/cpdb_analysis@1911
import define1 from "./e93997d5089d7165@2303.js";

export default function define(runtime, observer) {
  const main = runtime.module();
  const fileAttachments = new Map([["officerdata.csv",new URL("./files/8caa259246fa368d323daf2be77b862e996edb29602a445770e3828fe71960c0212bc8f093acbfa2f5d6df91d4ab1ae80f17d3cd5650b8d21df7ce89add63b8a",import.meta.url)]]);
  main.builtin("FileAttachment", runtime.fileAttachments(name => fileAttachments.get(name)));
  main.variable(observer()).define(["md"], function(md){return(
md`## CPDB Analysis`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`### You will find below a series of graphs that will show the differences in the sustainment of complaints against police officers on the basis of their gender, race, rank, age, and salary. `
)});
  main.variable(observer()).define(["md"], function(md){return(
md`#### Filter by Gender`
)});
  main.variable(observer("viewof gender")).define("viewof gender", ["radio"], function(radio){return(
radio({
  options: [
    { label: 'Any gender', value: 'all' },
    { label: 'Male', value: 'M' },
    { label: 'Female', value: 'F' },
  ],
  value: 'all'
})
)});
  main.variable(observer("gender")).define("gender", ["Generators", "viewof gender"], (G, _) => G.input(_));
  main.variable(observer()).define(["md"], function(md){return(
md`#### Filter by Race`
)});
  main.variable(observer("viewof race")).define("viewof race", ["radio"], function(radio){return(
radio({
  options: [
    { label: 'Any race', value: 'all' },
    { label: 'Asian/Pacific', value: 'Asian/Pacific' },
    { label: 'Black', value: 'Black' },
    { label: 'Hispanic', value: 'Hispanic' },
    { label: 'Native American/Alaskan Native', value: 'Native American/Alaskan Native' },
    { label: 'White', value: 'White' },
    { label: 'Unknown', value: 'Unknown' },
  ],
  value: 'all'
})
)});
  main.variable(observer("race")).define("race", ["Generators", "viewof race"], (G, _) => G.input(_));
  main.variable(observer()).define(["md"], function(md){return(
md`#### Filter by Rank`
)});
  main.variable(observer("viewof rank")).define("viewof rank", ["Inputs","ranks"], function(Inputs,ranks){return(
Inputs.select(ranks, {format: x => x })
)});
  main.variable(observer("rank")).define("rank", ["Generators", "viewof rank"], (G, _) => G.input(_));
  main.variable(observer()).define(["md"], function(md){return(
md`#### Filter by Allegations`
)});
  main.variable(observer("viewof sustainment")).define("viewof sustainment", ["radio"], function(radio){return(
radio({
  options: [
    { label: 'All allegations', value: 'all' },
    { label: 'Sustained', value: 'SU' },
    { label: 'Non-sustained', value: 'NS' },
  ],
  value: 'all'
})
)});
  main.variable(observer("sustainment")).define("sustainment", ["Generators", "viewof sustainment"], (G, _) => G.input(_));
  main.variable(observer()).define(["md"], function(md){return(
md`#### Filter by Age`
)});
  main.variable(observer("viewof minage")).define("viewof minage", ["Inputs"], function(Inputs){return(
Inputs.range([0,110], {step: 1, value: 0, label: 'Min Age'})
)});
  main.variable(observer("minage")).define("minage", ["Generators", "viewof minage"], (G, _) => G.input(_));
  main.variable(observer("viewof maxage")).define("viewof maxage", ["Inputs"], function(Inputs){return(
Inputs.range([0,110], {step: 1, value: 50,  label: 'Max Age'})
)});
  main.variable(observer("maxage")).define("maxage", ["Generators", "viewof maxage"], (G, _) => G.input(_));
  main.variable(observer()).define(["md"], function(md){return(
md`#### Filter by Salary`
)});
  main.variable(observer("viewof minsalary")).define("viewof minsalary", ["Inputs"], function(Inputs){return(
Inputs.range([0,270000], {step: 1000, value: 0, label: 'Min Salary'})
)});
  main.variable(observer("minsalary")).define("minsalary", ["Generators", "viewof minsalary"], (G, _) => G.input(_));
  main.variable(observer("viewof maxsalary")).define("viewof maxsalary", ["Inputs"], function(Inputs){return(
Inputs.range([0,270000], {step: 1000, value: 80000, label: 'Max Salary'})
)});
  main.variable(observer("maxsalary")).define("maxsalary", ["Generators", "viewof maxsalary"], (G, _) => G.input(_));
  main.variable(observer()).define(["Plot","final_age_list"], function(Plot,final_age_list){return(
Plot.plot({
  width: 1200,
  inset: 0,
  height : 400,
  y: {
    label: "↑ Count",
    grid: true
  },
  marks: [
    Plot.barY(final_age_list, {x: "Age", y: "Count", fill: "#00a089"}),
    Plot.text(final_age_list, {x: "Age", y: "Count", text: d => (d.Count), dy: -5}),
    Plot.ruleY([0])
  ]
})
)});
  main.variable(observer()).define(["md"], function(md){return(
md`**We aim to analyze if there is a difference in the sustainment of complaints against police officers on the basis of their genders.** 

We divide the police officers into different categories based on their age and salaries. 

Salary <80k and age <30 : We found that there are 151 officers within this range with complaints against them, with the average salary in the group being close to 66k. Out of this, only 10 complaints were sustained (final finding = recommended finding), all of whom were male. 

Salary between 80k and 130k and age between 30-50 : We found that there were 55959 officers with complaints against them in the given range, with the average salary being close to 92k USD. Out of these, about 87% (48796/55959) were against male police officers. Out of these only about 4% are sustained. The sustainment rate for female police officers stands at about 6%.

Salary <80k and age between 30-50 : There are 4686 officers in this range with complaints against them, with an average salary of 64k, out of which 86% are male. The sustainment rate for male police officers stands at 10%, for female officers is at 16% in this category. 

Salary >130k: There are a total of 3002 police officers in this category, with the average salary for the lot being 158k. Out of these complaints, 93% of them are against males. Around 5% of them are sustained, whereas the sustainment rate for females is around 12%. 

`
)});
  main.variable(observer()).define(["Plot","width","d3","final_gender_list"], function(Plot,width,d3,final_gender_list){return(
Plot.plot({
  width,
  inset: 0,
  height : 400,
  x: {
    domain: d3.sort(final_gender_list, d => -d.Count).map(d => d.Gender)
  },
  y: {
    label: "↑ Count",
    grid: true
  },
  marks: [
    Plot.barY(final_gender_list, {x: "Gender", y: "Count", fill: "#0e0052"}),
    Plot.text(final_gender_list, {x: "Gender", y: "Count", text: d => (d.Count), dy: -5}),
    Plot.ruleX([0])
  ]
})
)});
  main.variable(observer()).define(["md"], function(md){return(
md`
**What is the difference in percentage of sustained complaints based on the race of the police officer?**

Salary <80k and age <30: About 34% of the complaints are against Hispanic police officers, out of which 4% are sustained. 

Salary between 80k and 130k and age between 30-50 : Out of approx. of the 56k police officers in this category with complaints against them, 59% of those are against ‘White’ police officers, followed by 24% against ‘Hispanics’ and 15% against ‘Black’ police officers. The sustainment rate stands at 3%, 4% and 7% respectively for all these races. 

Salary <80k and age between 30-50: There are a total of 4686 complaints in this category. The highest number of complaints are again against ‘White’ police officers (56% of total complaints), with a sustainment rate of 7%.


Salary>130k : Again, the maximum number of complaints in this category are against ‘White’ police officers with a sustainment rate of 5%. 
`
)});
  main.variable(observer()).define(["Plot","width","final_race_list"], function(Plot,width,final_race_list){return(
Plot.plot({
  width,
  inset: 0,
  height : 400,
  y: {
    label: "↑ Count",
    grid: true
  },
  marks: [
    Plot.barY(final_race_list, {x: "Race", y: "Count", fill: "#a400e0"}),
    Plot.text(final_race_list, {x: "Race", y: "Count", text: d => (d.Count), dy: -5}),
    Plot.ruleY([0])
  ]
})
)});
  main.variable(observer()).define(["md"], function(md){return(
md`**What is the split of sustained complaints based on the ranks of police officers?**

Salary between 80k and 130k and age between 30-50: The maximum number of complaints are against the rank ‘Police officer’ (58% of total), followed by ‘Sergeant of police’ and ‘Police officer as detective’. The sustainment rate stands at 5%, 3% and 3% respectively.

Salary <80k and age between 30-50: All the complaints are against the rank ‘police officer’, with a sustainment rate of 12%. 

Salary > 130k : As expected, the maximum number of complaints in this category belong to senior police officers. The maximum no. of complaints are against the rank ‘Captain of police’ (27% of total), followed by ‘Lieutenant of police’ (21% of total) with no sustained complaints. 
`
)});
  main.variable(observer()).define(["Plot","d3","final_rank_list"], function(Plot,d3,final_rank_list){return(
Plot.plot({
  width : 1500,
  inset: 0,
  height : 400,
  x: {
    domain: d3.sort(final_rank_list, d => -d.Count).map(d => d.Rank)
  },
  y: {
    label: "↑ Count",
    grid: true
  },
  marks: [
    Plot.barY(final_rank_list, {x: "Rank", y: "Count", fill: "#00e033"}),
    Plot.text(final_rank_list, {x: "Rank", y: "Count", text: d => (d.Count), dy: -5}),
    Plot.ruleY([0])
  ]
})
)});
  main.variable(observer()).define(["md"], function(md){return(
md`**What is the correlation between salary of police officers and sustainment of complaints against them?**

Salary <80k : There are around 56k police officers with complaints against them whose salary is less than 80k, with the average salary being ~34k.​​ The sustainment rate for these stands at 16%. 

Salary between 80k and 130k : The number of complaints in this category increases significantly (239% more than the first category) and is around 190k, with the average salary being close to 95k. The sustainment rate stands at 7% for the same. 

Salary above 130k : The number of complaints in this category with complaints against them stands at 3002, with the average salary being ~158k. The sustainment rate for the complaints is around 5%.  
`
)});
  main.variable(observer("chart")).define("chart", ["d3","width","height","bins","x","y","color","getTooltip","officers_filtered","xAxis","yAxis"], function(d3,width,height,bins,x,y,color,getTooltip,officers_filtered,xAxis,yAxis)
{
  const svg = d3.create("svg")
      .attr("viewBox", [0, 0, width, height]);
  
  svg.append("g")
    .selectAll("rect")
    .data(bins)
    .join("rect")
      .attr("x", d => x(d.x0) + 1)
      .attr("width", d => Math.max(0, x(d.x1) - x(d.x0) - 1))
      .attr("y", d => y(d.length))
      .attr("height", d => y(0) - y(d.length))
      .attr('fill', (d, i) => color(i))
      .append('title').text((d, i) => getTooltip(d, i))

  let yLabel = svg.append('g').attr('style', 'transform:translate(10px, 280px)');
  yLabel.append('g')
    .attr('text-anchor', 'start')
    .selectAll('text')
    .data(['Number of officers'])
    .join('text')
    .attr('font-size', 12)
    .attr('font-family', 'sans-serif')
    .attr('font-weight', 'bold')
    .attr('style', (d, i) => `transform: rotate(-90deg)`)
    .text(d => d);
  
  let xLabel = svg.append('g').attr('style', `transform:translate(${width/2 - 50}px, ${height - 10}px)`);
  xLabel.append('g')
    .attr('text-anchor', 'start')
    .selectAll('text')
    .data(['Salaries ($)'])
    .join('text')
    .attr('font-size', 12)
    .attr('font-family', 'sans-serif')
    .attr('font-weight', 'bold')
    .text(d => d);
  
  let salaryStats = [
    'Salaries in group:', officers_filtered.length, 
    'Average salary in group:', '$' + (d3.mean(officers_filtered) || 0).toFixed(2)
  ]
  
  let countLabel = svg.append('g').attr('style', `transform:translate(${width - 200}px, 50px)`);
  countLabel.append('g')
    .attr('text-anchor', 'start')
    .selectAll('text')
    .data(salaryStats)
    .join('text')
    .attr('font-size', (d, i) => i % 2 ? 24 : 12)
    .attr('font-family', 'sans-serif')
    .attr('font-weight', 'bold')
    .attr('y', (d, i) => [0,25,75,100][i])
    .text(d => d);
  
  svg.append("g")
      .call(xAxis);
  
  svg.append("g")
      .call(yAxis);
  
  return svg.node();
}
);
  main.variable(observer()).define(["md"], function(md){return(
md`## **Summary:**



Over our analysis through the different questions we asked, we gathered some very unique insights. Some of these insights were expected after reading through the Chicago Police Department articles (https://theintercept.com/2018/08/15/chicago-police-reform-rahm-emanuel-laquan-mcdonald/) and (https://fivethirtyeight.com/features/how-to-predict-which-chicago-cops-will-commit-misconduct/) whereas some insights were very surprising for us. 

The analysis of the police officers’ salaries shows that the highest salary recorded is around 170,000 USD per year. However, there are some discrepancies when it comes to the correlation between age and salaries of the officers. We would expect that salaries would increase with age, but some police officers within the age range of 30-50 still receive a salary of less than <100000 USD per year. We have observed that there is a large number of complaints against such police officers, with a sustained rate of only 5%. It could thus be hypothesized that even though such police officers are not being ‘punished’ per say, there have been withholds in their salary increment levels. 

An analysis of the split of sustained complaints by gender shows that male police officers have a higher number of total (215911/249788 = 86%) as well as sustained (17916/21990= 81%) complaints against them. This could be attributed to the discrepancies in the number of total male and female police officers in the force. A plausible reason for the same could be that female police officer were posted in less violent neighborhoods than their male counterparts. 

As far as the correlation of sustainment and race of the police officers goes, the sustainment rate is pretty even for all the races, just minorly higher for the black police officers (7%) . Since the data is not hard-hitting or large enough to make concrete inferences on the said correlation, we would refrain from making any concrete inferences about the same. 
As far as the rank of the police officers is concerned, the maximum number of complaints in the low salary bracket are against the rank ‘police officers’ as expected. When the salary bracket is >130k, the maximum complaints are against the captain (27%) and lieutenants (21%), with a surprising finding being that none of those complaints were sustained. 
`
)});
  main.variable(observer("bins")).define("bins", ["d3","ranges","thresholds","officers_filtered"], function(d3,ranges,thresholds,officers_filtered){return(
d3.bin().domain(ranges).thresholds(thresholds)(officers_filtered)
)});
  main.variable(observer("getTooltip")).define("getTooltip", ["bins"], function(bins){return(
function getTooltip(d, i){
  if(!bins[i]) return '';
  
  return `$${prettySalary(bins[i].x0)} - $${prettySalary(bins[i].x1)} (${bins[i].length} salaries)`
  
  function prettySalary(x){
    return x/1000 + 'k'
  }
}
)});
  main.variable(observer("thresholds")).define("thresholds", function(){return(
30
)});
  main.variable(observer("ranges")).define("ranges", function(){return(
[0,200000]
)});
  main.variable(observer("x")).define("x", ["d3","ranges","margin","width"], function(d3,ranges,margin,width){return(
d3.scaleLinear()
    .domain(ranges)
    .range([margin.left, width - margin.right])
)});
  main.variable(observer("y")).define("y", ["d3","bins","height","margin"], function(d3,bins,height,margin){return(
d3.scaleLinear()
    .domain([0, d3.max(bins, d => d.length)]).nice()
    .range([height - margin.bottom, margin.top])
)});
  main.variable(observer("xAxis")).define("xAxis", ["height","margin","d3","x","width"], function(height,margin,d3,x,width){return(
g => g
    .attr("transform", `translate(0,${height - margin.bottom})`)
    .call(d3.axisBottom(x).ticks(width / 80 ).tickSizeOuter(0))
    .call(g => g.append("text")
        .attr("x", width - margin.right)
        .attr("y", -4)
        .attr("fill", "currentColor")
        .attr("font-weight", "bold")
        .attr("text-anchor", "end"))
)});
  main.variable(observer("yAxis")).define("yAxis", ["margin","d3","y","height"], function(margin,d3,y,height){return(
g => g
    .attr("transform", `translate(${margin.left},0)`)
    .call(d3.axisLeft(y).ticks(height / 40))
    .call(g => g.select(".domain").remove())
    .call(g => g.select(".tick:last-of-type text").clone()
        .attr("x", 4)
        .attr("text-anchor", "start")
        .attr("font-weight", "bold"))
)});
  main.variable(observer("height")).define("height", function(){return(
500
)});
  main.variable(observer("margin")).define("margin", function(){return(
{top: 20, right: 20, bottom: 40, left: 50}
)});
  main.variable(observer("color")).define("color", ["d3","thresholds"], function(d3,thresholds)
{
  return d3.scalePow().domain([0, thresholds])
      .interpolate(d3.interpolateHcl)
      .range([d3.rgb('#a400e0'), d3.rgb("#00e033")]);
}
);
  main.variable(observer("arrToInstanceCountObj")).define("arrToInstanceCountObj", function(){return(
arr => arr.reduce((obj, e) => {
  obj[e] = (obj[e] || 0) + 1;
  return obj;
}, {})
)});
  main.variable(observer("officers_filtered_race")).define("officers_filtered_race", ["officer_data","raceFilter","rankFilter","sustainedFilter","salaryFilter","genderFilter","ageFilter"], function(officer_data,raceFilter,rankFilter,sustainedFilter,salaryFilter,genderFilter,ageFilter)
{
  return officer_data
    .filter(raceFilter)
    .filter(rankFilter)
    .filter(sustainedFilter)
    .filter(salaryFilter)
    .filter(genderFilter)
    .filter(ageFilter)
    .map(row=> row.race);
}
);
  main.variable(observer("race_list")).define("race_list", ["arrToInstanceCountObj","officers_filtered_race"], function(arrToInstanceCountObj,officers_filtered_race){return(
arrToInstanceCountObj(officers_filtered_race)
)});
  main.variable(observer("final_race_list")).define("final_race_list", ["race_list"], function(race_list)
{
var arr = []
  for(let i= 0; i< Object.keys(race_list).length; i++){
    var obj = {}
    obj['Count'] = Object.values(race_list)[i]
    obj['Race'] = Object.keys(race_list)[i]
    arr.push(obj)
  }
  return arr
}
);
  main.variable(observer("officers_filtered_rank")).define("officers_filtered_rank", ["officer_data","raceFilter","rankFilter","sustainedFilter","salaryFilter","genderFilter","ageFilter"], function(officer_data,raceFilter,rankFilter,sustainedFilter,salaryFilter,genderFilter,ageFilter)
{
  return officer_data
    .filter(raceFilter)
    .filter(rankFilter)
    .filter(sustainedFilter)
    .filter(salaryFilter)
    .filter(genderFilter)
    .filter(ageFilter)
    .map(row=> row.rank);
}
);
  main.variable(observer("rank_list")).define("rank_list", ["arrToInstanceCountObj","officers_filtered_rank"], function(arrToInstanceCountObj,officers_filtered_rank){return(
arrToInstanceCountObj(officers_filtered_rank)
)});
  main.variable(observer("final_rank_list")).define("final_rank_list", ["rank_list"], function(rank_list)
{
var arr = []
  for(let i= 0; i< Object.keys(rank_list).length; i++){
    var obj = {}
    obj['Count'] = Object.values(rank_list)[i]
    obj['Rank'] = Object.keys(rank_list)[i]
    if(obj['Count'] > 100){
      arr.push(obj)
    }
  }
  return arr
}
);
  main.variable(observer("officers_filtered_gender")).define("officers_filtered_gender", ["officer_data","raceFilter","rankFilter","sustainedFilter","salaryFilter","genderFilter","ageFilter"], function(officer_data,raceFilter,rankFilter,sustainedFilter,salaryFilter,genderFilter,ageFilter)
{
  return officer_data
    .filter(raceFilter)
    .filter(rankFilter)
    .filter(sustainedFilter)
    .filter(salaryFilter)
    .filter(genderFilter)
    .filter(ageFilter)
    .map(row=> row.gender);
}
);
  main.variable(observer("gender_list")).define("gender_list", ["arrToInstanceCountObj","officers_filtered_gender"], function(arrToInstanceCountObj,officers_filtered_gender){return(
arrToInstanceCountObj(officers_filtered_gender)
)});
  main.variable(observer("final_gender_list")).define("final_gender_list", ["gender_list"], function(gender_list)
{
var arr = []
  for(let i= 0; i< Object.keys(gender_list).length; i++){
    var obj = {}
    obj['Count'] = Object.values(gender_list)[i]
    obj['Gender'] = Object.keys(gender_list)[i]
    arr.push(obj)
  }
  return arr
}
);
  main.variable(observer("officers_filtered_age")).define("officers_filtered_age", ["officer_data","raceFilter","rankFilter","sustainedFilter","salaryFilter","genderFilter","ageFilter"], function(officer_data,raceFilter,rankFilter,sustainedFilter,salaryFilter,genderFilter,ageFilter)
{
  return officer_data
    .filter(raceFilter)
    .filter(rankFilter)
    .filter(sustainedFilter)
    .filter(salaryFilter)
    .filter(genderFilter)
    .filter(ageFilter)
    .map(row=> row.age);
}
);
  main.variable(observer("age_list")).define("age_list", ["arrToInstanceCountObj","officers_filtered_age"], function(arrToInstanceCountObj,officers_filtered_age){return(
arrToInstanceCountObj(officers_filtered_age)
)});
  main.variable(observer("final_age_list")).define("final_age_list", ["age_list"], function(age_list)
{
var arr = []
  for(let i= 0; i< Object.keys(age_list).length; i++){
    var obj = {}
    obj['Count'] = Object.values(age_list)[i]
    obj['Age'] = Object.keys(age_list)[i]
    arr.push(obj)
  }
  return arr
}
);
  main.variable(observer("officer_data")).define("officer_data", ["FileAttachment"], function(FileAttachment){return(
FileAttachment("officerdata.csv").csv()
)});
  main.variable(observer("raceFilter")).define("raceFilter", ["race"], function(race){return(
function raceFilter(row){
  return race === 'all' || row.race === race;
}
)});
  main.variable(observer("rankFilter")).define("rankFilter", ["rank"], function(rank){return(
function rankFilter(row){
  return rank === 'All ranks' || row.rank === rank;
}
)});
  main.variable(observer("genderFilter")).define("genderFilter", ["gender"], function(gender){return(
function genderFilter(row){
  return gender === 'all' || row.gender === gender;
}
)});
  main.variable(observer("salaryFilter")).define("salaryFilter", ["maxsalary","minsalary"], function(maxsalary,minsalary){return(
function salaryFilter(row){
  return (Number(row.current_salary) <= maxsalary) && (Number(row.current_salary) >= minsalary);
}
)});
  main.variable(observer("ageFilter")).define("ageFilter", ["maxage","minage"], function(maxage,minage){return(
function ageFilter(row){
  return (Number(row.age) <= maxage) && (Number(row.age) >= minage);
}
)});
  main.variable(observer("sustainedFilter")).define("sustainedFilter", ["sustainment"], function(sustainment){return(
function sustainedFilter(row){
  return sustainment === 'all' || row.final_finding === sustainment;
}
)});
  const child1 = runtime.module(define1);
  main.import("slider", child1);
  main.import("radio", child1);
  main.variable(observer("ranks")).define("ranks", ["officer_data"], function(officer_data){return(
officer_data.map(d => d.rank).filter((value, index, categoryArray) => categoryArray.indexOf(value) === index)
)});
  main.variable(observer()).define(["ranks"], function(ranks){return(
ranks.unshift('All ranks')
)});
  main.variable(observer("officers_filtered")).define("officers_filtered", ["officer_data","raceFilter","rankFilter","sustainedFilter","salaryFilter","genderFilter","ageFilter"], function(officer_data,raceFilter,rankFilter,sustainedFilter,salaryFilter,genderFilter,ageFilter)
{
  return officer_data
    .filter(raceFilter)
    .filter(rankFilter)
    .filter(sustainedFilter)
    .filter(salaryFilter)
    .filter(genderFilter)
    .filter(ageFilter)
    .map(row=> row.current_salary);
}
);
  main.variable(observer("d3")).define("d3", ["require"], function(require){return(
require("d3@^6.2.0")
)});
  return main;
}

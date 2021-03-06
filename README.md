# Project Overview


## CrimeNY

**Project decription:** This application provides a historical experience to the end-user of the ever changing climate of crime in NYC.

## API
This project will utilize the NYC OpenData

OpenData Endpoint
```
https://data.cityofnewyork.us/resource/qgea-i56i.json
```


## API Snippet

This is an example of a single Crime incidence from the NYC OpenData API. Some of the data has been trimmed to make the information more digestable.


```
{
cmplnt_num: "522575447",
cmplnt_fr_dt: "2006-08-29T00:00:00.000",
cmplnt_fr_tm: "13:00:00",
ofns_desc: "HARRASSMENT 2",
pd_desc: "HARASSMENT,SUBD 3,4,5",
law_cat_cd: "VIOLATION",
boro_nm: "BRONX",
loc_of_occur_desc: "INSIDE",
prem_typ_desc: "RESIDENCE - APT. HOUSE",
juris_desc: "N.Y. POLICE DEPT",
x_coord_cd: "1018029",
y_coord_cd: "240747",
susp_race: "UNKNOWN",
susp_sex: "M",
latitude: "40.827414051",
longitude: "-73.877945775",
patrol_boro: "PATROL BORO BRONX",
vic_age_group: "25-44",
vic_race: "BLACK HISPANIC",
vic_sex: "F",
}
```

## Wireframe

![WireFrame](https://res.cloudinary.com/dwtzncgxe/image/upload/v1579894712/WireFrame_sxlq6s.gif)



### MVP

- Manipulate data set by year using slider
- Display mapped points to help end-user visualize the hot spots for crime.
- Plot crime incidences with clickable dialog leading to more information

### Post-MVP

- Filter crime data by numerous varying fields.
  - Age
  - Race
  - Offense type

  

## React Component Hierarchy

![Component Hierarchy](http://res.cloudinary.com/dwtzncgxe/image/upload/a_90/v1579896075/ComponentHierarchy_nfszou.jpg)

## Components

Based on the initial logic defined in the previous section, try to breakdown the logic further into stateless/stateful components. 

| Component   | Description                                                                     | Type       |
|-------------|---------------------------------------------------------------------------------|------------|
| Header      | Displays CrimeNY                                                                | Functional |
| Footer      | Displays social media links                                                     | Functional |
| DataHandler | Handles API calls from OpenData as well as creating map marker and heatMap data | Functional |
| Slider      | UI element to allow user to select data set year                                | Functional |
| Map         | MapBox generated element that renders heat-maps and plotted crime incidences.   | Functional |
| Legend      | Collection of numerous symbols used to designate certain crimes.                | Functional |

## Priority Matrix

![Priority Matrix](https://res.cloudinary.com/dwtzncgxe/image/upload/v1579897922/Screen_Shot_2020-01-24_at_3.31.26_PM_xfloyn.png)

## Timeframes

| Component                                         | Priority | Estimated Time | Time Invested | Actual Time |
|---------------------------------------------------|----------|----------------|---------------|-------------|
| Map                                               | High     | 16 hrs         | 5 hrs         | 0 hrs       |
| DataHandler - Filter by Year                      | High     | 8 hrs          | 0 hrs         | 0 hrs       |
| DataHandler - Create HeatMap data                 | High     | 8 hrs          | 0 hrs         | 0 hrs       |
| DataHandler - Plot Individual Crimes              | High     | 6 hrs          | 0 hrs         | 0 hrs       |
| Legend - Show crimes by type                      | Medium   | 4 hrs          | 0 hrs         | 0 hrs       |
| Slider - add input to DataHandler filter          | Medium   | 2 hrs          | 0 hrs         | 0 hrs       |
| Header                                            | Low      | 1 hr           | 0 hrs         | 0 hrs       |
| About- create a conditionally rendered about page | Low      | 2 hrs          | 0 hrs         | 0 hrs       |
| Footer                                            | Low      | 1 hr           | 0 hrs         | 0 hrs       |
| Total                                             |          | 48 hrs         | 0 hrs         | 0 hrs       |

## Project Schedule

This schedule will be used to keep track of your progress throughout the week and align with our expectations.  

You are **responsible** for scheduling time with your squad to seek approval for each deliverable by the end of the corresponding day, excluding `Saturday` and `Sunday`.

| Day    | Deliverable                                        | Status     |
|--------|----------------------------------------------------|------------|
| Jan 24 | Complete proposal                                  | Complete |
| Jan 27 | Create working Mapbox Prototype                    | Complete |
| Jan 27 | Create working Mapbox Prototype                    | Complete |
| Jan 28 | Filter through OpenData calls and create map plots | Incomplete |
| Jan 29 | Create HeatMap.                                    | Incomplete |
| Jan 30 | Make Slider functional, Reach MVP                              | Incomplete |
| Jan 31 | Styling                                            | Incomplete |

## Additional Libraries

* React Router
* Axios
* MapBox-GL
* Radium

## Issues and Resolutions

I anticipate issues using the MapBox API as it has a relatively steep learning, However I am commiting time to tutorials over the weekend.


*Map box proved quite simple to use after watching a tutorial.*

	
I expected my slider component to be very easy to build.

*I'm still currently strugling to build the slider however I think I approached the problem with a solution that was beyond the neccessary application.*
## Code Snippet

Use this section to include a brief code snippet you are proud of, along with a brief description of why.

```
function reverse(string) {
	// here is the code to reverse a string of text
}
```

## Change Log
 Use this section to document what changes were made in your overall planning and the reasoning behind those changes.  
 
###Jan 30
* Removing Material-ui and Typeface. I have come to the realization that I want to approach the slider component from a diffrent angle. I realized that the slider can be built using:

```
<div class="slidecontainer">
  <input type="range" min="1" max="100" value="50" class="slider" id="myRange">
</div>
```

I will also be adding in the Radium library to use in my inline library. This library allows the developer to add in ::hover effects as well as all other css capabilities that are not supported by default within react inline styling.

###Jan 29
* Removed the React-Component-Slider library replacing it with Material-UI

* Added Roboto-typeface library
 
###Jan 28
-Added New libray React-Component-Slider.
-Created colorized crimes.
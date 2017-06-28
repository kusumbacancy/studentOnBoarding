import axios from 'axios';

const scheduleService= {
  getScheduleList: function(){
    let data = [
                {
                  id: 1,
                  title: "ISLAMIC STUDIES",
                  timeRange: "10.15 - 10.45 AM",
                  shortDesc: "Absolute Essentials of Islam: Shafi",
                  desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravin gravida dolor sit amet lacus accumsan et viverra justo commodo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravin gravida dolor sit amet lacus accumsan et viverra justo commodo. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                  className: "green",
                  collapsible:false
                },
                {
                  id: 2,
                  title: "ISLAMIC STUDIES",
                  timeRange: "10.15 - 10.45 AM",
                  shortDesc: "Absolute Essentials of Islam: Shafi",
                  desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravin gravida dolor sit amet lacus accumsan et viverra justo commodo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravin gravida dolor sit amet lacus accumsan et viverra justo commodo. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                  className: "darkblue",
                  collapsible:false
                },
                {
                  id: 3,
                  title: "ISLAMIC STUDIES",
                  timeRange: "10.15 - 10.45 AM",
                  shortDesc: "Absolute Essentials of Islam: Shafi",
                  desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravin gravida dolor sit amet lacus accumsan et viverra justo commodo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravin gravida dolor sit amet lacus accumsan et viverra justo commodo. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                  className: "darkgray",
                  collapsible:false
                },
                {
                  id: 4,
                  title: "Break",
                  timeRange: "10.15 - 10.45 AM",
                  status: "break"
                },
                {
                  id: 5,
                  title: "ISLAMIC STUDIES",
                  timeRange: "10.15 - 10.45 AM",
                  shortDesc: "Absolute Essentials of Islam: Shafi",
                  desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravin gravida dolor sit amet lacus accumsan et viverra justo commodo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravin gravida dolor sit amet lacus accumsan et viverra justo commodo. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                  className: "lightblue",
                  collapsible:false
                },
                {
                  id: 6,
                  title: "ISLAMIC STUDIES",
                  timeRange: "10.15 - 10.45 AM",
                  shortDesc: "Absolute Essentials of Islam: Shafi",
                  desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravin gravida dolor sit amet lacus accumsan et viverra justo commodo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravin gravida dolor sit amet lacus accumsan et viverra justo commodo. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                  className: "artbg",
                  collapsible:false
                }

             ];
    return data;
  }
}
module.exports = scheduleService;

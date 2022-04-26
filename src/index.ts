import dayjs from 'dayjs'
import dayjsBusinessDays from 'dayjs-business-days2';

dayjs.extend(dayjsBusinessDays);

function calculateDaysLeft(endDate:string):number {
    console.log(dayjs.getHolidays());
    return dayjs(endDate).businessDiff(dayjs());
}

const urlParams = new URLSearchParams(window.location.search);
const last_day = urlParams.get("last_day") ?? "2022-05-19";
const name = urlParams.get("name") ?? "Mike";
const daysOff = parseInt(urlParams.get("days_off") ?? '1');
const who_span = document.getElementById("who");
who_span!.innerText = name;

const days_left_span = document.getElementById("days_left");
let days_left = calculateDaysLeft(last_day);
days_left_span!.innerText = (days_left - daysOff).toString(); 

const jared_img = document.getElementById("jared") as HTMLImageElement;
jared_img.src = "jared1.gif";
if (days_left <= 5) {
    jared_img.src = "jared2.gif";
}

export {}
import {  BUTTON_TYPES, MIDNIGHT_HOUR, NAV_ITEMS } from './constans'
import { HOURS_IN_DAY } from './constans'

export function isPageValid(page) {
  console.log(page)
  return Object.keys(NAV_ITEMS).includes(page)
}

export function isButtonValid(button) {

  return BUTTON_TYPES.includes(button)
}

export function isTimeLineItemValid(timelineItem) {
  return isHourValid(timelineItem.hour)
  // return isNumber(timelineItem.hour) && isBetween(timelineItem.hour, MIDNIGHT_HOUR, HOURS_IN_DAY - 1)
  // timelineItem.hour >= MIDNIGHT_HOUR &&
  // timelineItem.hour < HOURS_IN_DAY
}

export function isHourValid(hour) {
  return isNumber(hour) && isBetween(hour, MIDNIGHT_HOUR, HOURS_IN_DAY - 1)
}

export function validateTimelineItems(timelineItems) {
  return timelineItems.every(isTimeLineItemValid)
}

export function validateSelectOptions(options) {
  return options.every(isSelectOptionsValid)
}

export function isActivityValid({id,name,secondsToComlete}) {
  return [
    isNotEmptyString(id),
    isNotEmptyString(name),
    isNumber(secondsToComlete)
  ].every(Boolean)
}

export function validateActivities(activities) {
  return activities.every(isActivityValid)
}

export function isNumberOrNull(value) {
  return isNumber(value) || isNull(value)
}

export function isUndefinedOrNull(value) {
  return isUndefined(value) || isNull(value)
}

export function isUndefined(value) {
  return value === undefined
}

function isSelectOptionsValid({ value, label }) {
  return (isNumber(value)|| isNotEmptyString(value)) && isNotEmptyString(label)
}

function isBetween(value, start, end) {
  return value >= start && value <= end
}

function isNull(value) {
  return value === null
}



function isNumber(value) {
  return typeof value === 'number'
}

function isString(value) {
  return typeof value === 'string'
}

function isNotEmptyString(string) {
  return isString(string) && string.length > 0;
}

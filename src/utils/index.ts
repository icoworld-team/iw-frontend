import distanceInWorldsStrict from 'date-fns/distance_in_words_strict'
import differenceInHours from 'date-fns/difference_in_hours'
import format from 'date-fns/format'

export const relativeTime = (date:string) => {
    if(differenceInHours(new Date(), date) > 23) {
        return format(date, 'D MMMM YYYY HH:mm');
    }
    return distanceInWorldsStrict(new Date(), date, {addSuffix: true});
};

export const chatTime = (date:string) => {
    if(differenceInHours(new Date(), date) > 23) {
        return format(date, 'D MMMM YYYY HH:mm');
    }
    return format(date, 'HH:mm');
};

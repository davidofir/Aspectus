import * as Calendar from 'expo-calendar';

export default class CalendarClass{
        async checkCalendars(){
          const { status } = await Calendar.requestCalendarPermissionsAsync();
          if (status === 'granted') {
            const calendars = await Calendar.getCalendarsAsync(Calendar.EntityTypes.EVENT);
            console.log('Here are all your calendars:');
            console.log({ calendars });
          }
        };

        async getDefaultCalendarSource() {
            const defaultCalendar = await Calendar.getDefaultCalendarAsync();
            return defaultCalendar.source;
        }

        async createCalendar(givenTitle, givenColor,givenName) {
            const defaultCalendarSource =
              Platform.OS === 'ios'
                ? await getDefaultCalendarSource()
                : { isLocalAccount: true, name: 'Expo Calendar' };
            const newCalendarID = await Calendar.createCalendarAsync({
              title: givenTitle,
              color: givenColor,
              entityType: Calendar.EntityTypes.EVENT,
              sourceId: defaultCalendarSource.id,
              source: defaultCalendarSource,
              name: givenName,
              ownerAccount: 'personal',
              accessLevel: Calendar.CalendarAccessLevel.OWNER,
            });
            console.log(`Your new calendar ID is: ${newCalendarID}`);
          }
}
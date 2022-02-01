class Util {
  public static wakParseSimpleDate(stringDate: string): Date {
    // In wakanda, simple date is a date with only year, month and hour
    // in this format : DD!MM!YYYY
    if (!stringDate) {
      return null;
    }

    const arr = stringDate.split('!');
    if (arr.length !== 3) {
      // return null or throw an error, simple date format is ko
      return null;
    }
    const date: Date = new Date(
      Date.UTC(parseInt(arr[2], 10), parseInt(arr[1], 10) - 1, parseInt(arr[0], 10))
    );
    return date;
  }

  public static wakToStringSimpleDate(date: Date): string {
    if (!(date instanceof Date)) {
      return null;
    }
    const wakSimpleDate: string =
      date.getUTCDate() + '!' + (date.getUTCMonth() + 1) + '!' + date.getUTCFullYear();
    return wakSimpleDate;
  }
}

export default Util;

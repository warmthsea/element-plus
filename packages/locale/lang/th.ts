import type { Language } from '../index'

const th: Language = {
  name: 'th',
  el: {
    breadcrumb: {
      label: 'Breadcrumb', // to be translated
    },
    colorpicker: {
      confirm: 'ตกลง',
      clear: 'ล้างข้อมูล',
      defaultLabel: 'color picker', // to be translated
      description:
        'current color is {color}. press enter to select a new color.', // to be translated
    },
    datepicker: {
      now: 'ตอนนี้',
      today: 'วันนี้',
      cancel: 'ยกเลิก',
      clear: 'ล้างข้อมูล',
      confirm: 'ตกลง',
      selectDate: 'เลือกวันที่',
      selectTime: 'เลือกเวลา',
      startDate: 'วันที่เริ่มต้น',
      startTime: 'เวลาเริ่มต้น',
      endDate: 'วันที่สิ้นสุด',
      endTime: 'เวลาสิ้นสุด',
      prevYear: 'ปีก่อนหน้า',
      nextYear: 'ปีถัดไป',
      prevMonth: 'เดือนก่อนหน้า',
      nextMonth: 'เดือนถัดไป',
      year: 'ปี',
      month1: 'มกราคม',
      month2: 'กุมภาพันธ์',
      month3: 'มีนาคม',
      month4: 'เมษายน',
      month5: 'พฤษภาคม',
      month6: 'มิถุนายน',
      month7: 'กรกฎาคม',
      month8: 'สิงหาคม',
      month9: 'กันยายน',
      month10: 'ตุลาคม',
      month11: 'พฤศจิกายน',
      month12: 'ธันวาคม',
      weeks: {
        sun: 'อา',
        mon: 'จ',
        tue: 'อ',
        wed: 'พ',
        thu: 'พฤ',
        fri: 'ศ',
        sat: 'ส',
      },
      months: {
        jan: 'ม.ค.',
        feb: 'ก.พ.',
        mar: 'มี.ค.',
        apr: 'เม.ย.',
        may: 'พ.ค.',
        jun: 'มิ.ย.',
        jul: 'ก.ค.',
        aug: 'ส.ค.',
        sep: 'ก.ย.',
        oct: 'ต.ค.',
        nov: 'พ.ย.',
        dec: 'ธ.ค.',
      },
      week: 'week', //  to be translated

      // to be translated
      dateTablePrompt:
        'Use the arrow keys and enter to select the day of the month',
      monthTablePrompt: 'Use the arrow keys and enter to select the month',
      yearTablePrompt: 'Use the arrow keys and enter to select the year',
      selectedDate: 'Selected date',
      // to be translated
      weeksFull: {
        sun: 'Sunday',
        mon: 'Monday',
        tue: 'Tuesday',
        wed: 'Wednesday',
        thu: 'Thursday',
        fri: 'Friday',
        sat: 'Saturday',
      },
    },
    select: {
      loading: 'กำลังโหลด',
      noMatch: 'ไม่พบข้อมูลที่ตรงกัน',
      noData: 'ไม่พบข้อมูล',
      placeholder: 'เลือก',
    },
    cascader: {
      noMatch: 'ไม่พบข้อมูลที่ตรงกัน',
      loading: 'กำลังโหลด',
      placeholder: 'เลือก',
      noData: 'ไม่พบข้อมูล',
    },
    pagination: {
      goto: 'ไปที่',
      pagesize: '/หน้า',
      total: 'ทั้งหมด {total}',
      pageClassifier: '',
      page: 'Page', // to be translated
      prev: 'Go to previous page', // to be translated
      next: 'Go to next page', // to be translated
      currentPage: 'page {pager}', // to be translated
      prevPages: 'Previous {pager} pages', // to be translated
      nextPages: 'Next {pager} pages', // to be translated
      deprecationWarning:
        'Deprecated usages detected, please refer to the el-pagination documentation for more details', // to be translated
    },
    messagebox: {
      title: 'ข้อความ',
      confirm: 'ตกลง',
      cancel: 'ยกเลิก',
      error: 'คุณป้อนข้อมูลไม่ถูกต้อง',
      close: 'Close this dialog', // to be translated
    },
    upload: {
      deleteTip: 'กดปุ่ม "ลบ" เพื่อลบออก',
      delete: 'ลบ',
      preview: 'ตัวอย่าง',
      continue: 'ทำต่อ',
    },
    table: {
      emptyText: 'ไม่พบข้อมูล',
      confirmFilter: 'ยืนยัน',
      resetFilter: 'รีเซ็ต',
      clearFilter: 'ทั้งหมด',
      sumText: 'รวม',
    },
    tour: {
      next: 'ถัดไป',
      previous: 'ย้อนกลับ',
      finish: 'เสร็จสิ้น',
    },
    tree: {
      emptyText: 'ไม่พบข้อมูล',
    },
    transfer: {
      noMatch: 'ไม่พบข้อมูลที่ตรงกัน',
      noData: 'ไม่พบข้อมูล',
      titles: ['List 1', 'List 2'], // to be translated
      filterPlaceholder: 'กรอกคีย์เวิร์ด',
      noCheckedFormat: '{total} items', // to be translated
      hasCheckedFormat: '{checked}/{total} checked', // to be translated
    },
    image: {
      error: 'FAILED', // to be translated
    },
    pageHeader: {
      title: 'ย้อนกลับ',
    },
    popconfirm: {
      confirmButtonText: 'Yes', // to be translated
      cancelButtonText: 'No', // to be translated
    },
    carousel: {
      leftArrow: 'Carousel arrow left', // to be translated
      rightArrow: 'Carousel arrow right', // to be translated
      indicator: 'Carousel switch to index {index}', // to be translated
    },
    // to be translated
    inputNumber: {
      decrease: 'decrease number',
      increase: 'increase number',
    },
    // to be translated
    dropdown: {
      toggleDropdown: 'Toggle Dropdown',
    },
    // to be translated
    dialog: {
      close: 'Close this dialog',
    },
    // to be translated
    drawer: {
      close: 'Close this dialog',
    },
    // to be translated
    slider: {
      defaultLabel: 'slider between {min} and {max}',
      defaultRangeStartLabel: 'pick start value',
      defaultRangeEndLabel: 'pick end value',
    },
  },
}

export default th

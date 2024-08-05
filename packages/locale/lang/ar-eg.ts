import type { Language } from '../index'

/** Egyptian Arabic / 埃及阿拉伯语 */
const arEg: Language = {
  name: 'ar-eg',
  el: {
    breadcrumb: {
      label: 'Breadcrumb', // to be translated
    },
    colorpicker: {
      confirm: 'موافق',
      clear: 'إزالة',
      defaultLabel: 'إختر اللون',
      description: 'اللون الحالي هو {color}. اضفط انتر لاختيار لون جديد',
      alphaLabel: 'pick alpha value', // to be translated
    },
    datepicker: {
      now: 'الآن',
      today: 'اليوم',
      cancel: 'إلغاء',
      clear: 'إزالة',
      confirm: 'موافق',
      dateTablePrompt:
        'استخدم مفاتيح الاسهم و اضغط انتر لاختيار اليوم المراد من الشهر',
      monthTablePrompt: 'استخدم مفاتيح الاسهم واضغط انتر لاختيار الشهر',
      yearTablePrompt: 'استخدم مفاتيح الاسهم واضغط انتر لاختيار السنة',
      selectDate: 'إختر التاريخ',
      selectTime: 'إختر الوقت',
      startDate: 'تاريخ البدء',
      startTime: 'وقت البدء',
      endDate: 'تاريخ الإنتهاء',
      endTime: 'وقت الإنتهاء',
      prevYear: 'السنة السابقة',
      nextYear: 'السنة التالية',
      prevMonth: 'الشهر السابق',
      nextMonth: 'الشهر التالي',
      year: 'سنة',
      month1: 'يناير',
      month2: 'فبراير',
      month3: 'مارس',
      month4: 'أبريل',
      month5: 'مايو',
      month6: 'يونيو',
      month7: 'يوليو',
      month8: 'أغسطس',
      month9: 'سبتمبر',
      month10: 'أكتوبر',
      month11: 'نوفمبر',
      month12: 'ديسمبر',
      week: 'أسبوع',
      weeks: {
        sun: 'الأحد',
        mon: 'الأثنين',
        tue: 'الثلاثاء',
        wed: 'الأربعاء',
        thu: 'الخميس',
        fri: 'الجمعة',
        sat: 'السبت',
      },
      months: {
        jan: 'يناير',
        feb: 'فبراير',
        mar: 'مارس',
        apr: 'أبريل',
        may: 'مايو',
        jun: 'يونيو',
        jul: 'يوليو',
        aug: 'أغسطس',
        sep: 'سبتمبر',
        oct: 'أكتوبر',
        nov: 'نوفمبر',
        dec: 'ديسمبر',
      },
      selectedDate: 'Selected date', // to be translated
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
    inputNumber: {
      decrease: 'طرح رقم',
      increase: 'زيادة رقم',
    },
    select: {
      loading: 'جار التحميل',
      noMatch: 'لايوجد بيانات مطابقة',
      noData: 'لايوجد بيانات',
      placeholder: 'إختر',
    },
    mention: {
      loading: 'جار التحميل',
    },
    dropdown: {
      toggleDropdown: 'تبديل القائمة',
    },
    cascader: {
      noMatch: 'لايوجد بيانات مطابقة',
      loading: 'جار التحميل',
      placeholder: 'إختر',
      noData: 'لايوجد بيانات',
    },
    pagination: {
      goto: 'أذهب إلى',
      pagesize: '/صفحة',
      total: 'الكل {total}',
      pageClassifier: '',
      page: 'صفحة',
      prev: 'انتقل إلى الصفحة السابقة',
      next: 'انتقل إلى الصفحة التالية',
      currentPage: 'صفحة رقم {pager}',
      prevPages: 'صفحات {pager} السابقة',
      nextPages: 'صفحات {pager} التالية',
      deprecationWarning:
        'Deprecated usages detected, please refer to the el-pagination documentation for more details', // to be translated
    },
    dialog: {
      close: 'أغلق هذا التبويب',
    },
    drawer: {
      close: 'أغلق هذا التبويب',
    },
    messagebox: {
      title: 'العنوان',
      confirm: 'موافق',
      cancel: 'إلغاء',
      error: 'مدخل غير صحيح',
      close: 'أغلق هذا التبويب',
    },
    upload: {
      deleteTip: 'اضغط ازالة لحذف المحتوى',
      delete: 'حذف',
      preview: 'عرض',
      continue: 'إستمرار',
    },
    slider: {
      defaultLabel: 'شريط التمرير بين {min} و {max}',
      defaultRangeStartLabel: 'اختر قيمة البدء',
      defaultRangeEndLabel: 'اختر قيمة النهاية',
    },
    table: {
      emptyText: 'لايوجد بيانات',
      confirmFilter: 'تأكيد',
      resetFilter: 'حذف',
      clearFilter: 'الكل',
      sumText: 'المجموع',
    },
    tree: {
      emptyText: 'لايوجد بيانات',
    },
    transfer: {
      noMatch: 'لايوجد بيانات مطابقة',
      noData: 'لايوجد بيانات',
      titles: ['قائمة 1', 'قائمة 2'],
      filterPlaceholder: 'ادخل كلمة',
      noCheckedFormat: '{total} عناصر',
      hasCheckedFormat: '{checked}/{total} مختار',
    },
    image: {
      error: 'فشل',
    },
    pageHeader: {
      title: 'عودة',
    },
    popconfirm: {
      confirmButtonText: 'نعم',
      cancelButtonText: 'لا',
    },
    carousel: {
      leftArrow: 'Carousel arrow left', // to be translated
      rightArrow: 'Carousel arrow right', // to be translated
      indicator: 'Carousel switch to index {index}', // to be translated
    },
    // to be translated
    tour: {
      next: 'Next',
      previous: 'Previous',
      finish: 'Finish',
    },
  },
}

export default arEg

import shavimKrembo from '../assets/photos/other/shavim-krembo.jpg';
import shavimSummercamp from '../assets/photos/other/shavim-summercamp.jpg';
import examplePic from '../assets/photos/other/example-1.jpg';

export type PartyActions = {
    title: string;
    alt: string;
    description: string;
    actionPic: string;
};

export const partyActionsData: PartyActions[] = [
    {
        title: 'קייצת לילדים בעלי צרכים מיוחדים בשוהם',
        alt: 'תמונה: קייצת לילדים בעלי צרכים מיוחדים בשוהם',
        description:
            'כולנו יודעים שכשמסתיימת שנת הלימודים וכל הילדים יוצאים לחופשת הקיץ כולנו מחפשים תעסוקה ובילוי לילדים.\n\nעל אחת כמה וכמה נחוצה פעילות קיץ משלימה לילדים עם צרכים מיוחדים. ללא מתן מענה הולם לילדים נפלאים אלו, הוריהם יהיו חייבים להתפנות אליהם בצורה טוטאלית ולא תמיד הדבר אפשרי גם מבחינת משאבים וגם מבחינת תכנים.\n\nלפי כך גייסנו את המועצה המקומית לקיים קייצת מיוחדת לילדים המיוחדים.\n\nמדובר על פעילות ייחודית של המועצה בשוהם שניתנת ללא עלות ונותנת מענה יום יומי לילדים.\nהקייצת זכתה לשם דבר בקרב כל הרשויות המקומיות בישראל. אנחנו גאים לומר כי אנחנו בשוהם היינו הראשונים והיחידים שנתנו פתרון כל כך חשוב ונחוץ.\n\nהיכולת לתת מענה בפתרונות הן לילדים והן להורים הוא הדבר ששווים חרטה על דגלה וקיימה לאורך כל הקדנציה האחרונה.',
        actionPic: shavimSummercamp,
    },
    {
        title: 'הסברה, חינוך והטמעה של נושא בעלי צרכים מיוחדים בשוהם',
        alt: 'תמונה: הסברה, חינוך והטמעה של נושא בעלי צרכים מיוחדים בשוהם',
        description:
            'אנחנו בשווים בחרנו בגישה של לצאת החוצה לקהילה לתנועות הנוער ולכל מקום בהזדמנות שבה נוכל לספר ולגייס משאבים ומתנדבים לעבודה עם הצרכים של אוכלוסיות מיוחדות.\n\nלא מספיק לכתוב על זה ובוודאי שדברים לא יכולים לקרום אור וגידים אם אין תמיכה והתגייסות של כל הקהילה להתנדב ולעזור.\n\nעל מנת להראות שבעלי צרכים מיוחדים הינם שווים כמו כל אחד אחר, חובה לפתח שיח מלמד מסביר מזמין ופתוח על אוכלוסייה מיוחדת זו.\nבמהלך הקדנציה האחרונה קיימנו עשרות מפגשים בהם הסברנו ושוחחנו וקרבנו את תושבי שוהם ובמיוחד את הנוער הנפלא שלנו לקהילה של בעלי הצרכים המיוחדים.\n\nהשיח הפתוח והכנה יצרו אווירה נפלאה של תמיכה ושל רצון לעזור וכמובן הבנה מלאה של הצורך בראיית השונה ובקירובו וקבלתו בתוך החברה.\nבמפגשים נכחו אלפים מתושבי שוהם שבנוכחותם הפגינו את הערכה והפתיחות והערבות ההדדית ששוהם כל כך מצטיינת בה.',
        actionPic: examplePic,
    },
    {
        title: 'הבאנו את תנועת הנוער "כנפיים של קרמבו" לשוהם.',
        alt: 'תמונה: הבאנו את תנועת הנוער "כנפיים של קרמבו" לשוהם',
        description:
            'כשיש לך בת או בן משפחה עם צרכים מיוחדים השאיפה היא תמיד למלא את כל מחסורו ולתת לו את התחושה שהוא שווה והוא כמו כולם.\n\nמתוך הראייה ההוליסטית הזו ראינו גם את הצרכים של החינוך המשלים עבור הילדים עם הצרכים המיוחדים ופעלנו כבר בשנה הראשונה לבחירתנו להביא לשוהם את תנועת הנוער הנפלאה והכל כך מיוחדת "כנפיים של קרמבו".\n\nלא רק שהילדים עם הצרכים המיוחדים קיבלו מענה מושלם לפעילויות אחר הצהריים, כמו הילדים בתנועות הנוער האחרות, אלא גם המתנדבים המדריכים והצוות של התנועה קיבל אפשרות להתנדב ולפעול בצורה יוצאת מן הכלל ובכך לפתח את הערבות ההדדית ורוח ההתנדבות הכל כך חשובים להתפתחותה של חברה בריאה.',
        actionPic: shavimKrembo,
    },
];
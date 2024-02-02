import eitanPicture from '../../../assets/photos/party-members/eitan-no-background.png';
import oriPicture from '../../../assets/photos/party-members/ori-pic.jpeg';
import limorPicture from '../../../assets/photos/party-members/limor-pic.jpeg';
import dividPicture from '../../../assets/photos/party-members/david-pic.jpeg';
import rachelPicture from '../../../assets/photos/party-members/rachel-pic.jpeg';
import meniPicture from '../../../assets/photos/party-members/meni-pic.jpeg';
import galitPicture from '../../../assets/photos/party-members/galit-pic.jpeg';
import galPicture from '../../../assets/photos/party-members/gal-pic.jpeg';
import nitzaPicture from '../../../assets/photos/party-members/nitza-pic.jpeg';
import yoelPicture from '../../../assets/photos/party-members/yoel-pic.jpeg';
import effiPicture from '../../../assets/photos/party-members/effi-pic.jpeg';
import michalPicture from '../../../assets/photos/party-members/michal-pic.jpeg';
import {
    HeadPartyContainter,
    HeadPartyMemberPicture,
    PartyMemberInfo,
    PartyMember,
    PartyMemberPicture,
    PartyMemberTitle,
    HeadPartySpeach,
    YellowLine,
} from './PartyPlatform.styles';

const PartyPlatform = () => {
    return (
        <>
            <HeadPartyContainter>
                <HeadPartyMemberPicture
                    style={{
                        backgroundImage: `url(${eitanPicture})`,
                    }}
                    title='תמונה של איתן ליליוס'
                />
                <HeadPartySpeach>
                    <p>
                        <b>חברים שלי,</b>
                        <br />
                        תראו איזה רשימה יפה ומכובדת גיבשנו לקראת הבחירות
                        הקרובות.
                        <br />
                        אני מאמין שהעשייה הרבה בקדנציה המסתיימת, העניקה לנו גם
                        אמון בקרב התושבים, וגם הערכה כלפי צדקת הדרך שלנו - לטפח
                        את האנשים המיוחדים ואת קול הקבילה כולה. המלאכה עוד לא
                        הסתיימה וגם בשנים הבאות אנחנו נעמוד על המשמר.
                        <br />
                        סיעת שווים תמשיך לייצג את כל גווני הקהילה על צרכים
                        השונים: חינוך מיוחד, ביטחון, חינוך, תעשייה, עסקעים,
                        צעירים קשרי חוץ, ספורט ועוד, כיאה לרשימה שחבריה הם אנשים
                        מוכשרים המוכנים לתרום מהידע והניסיון שלהם לטובת הקהילה.
                        <br />
                        <b>איתן ליליוס יו"ר סיעת שווים</b>
                    </p>
                </HeadPartySpeach>
            </HeadPartyContainter>
            <YellowLine />
            <PartyMember variant='right'>
                <PartyMemberPicture
                    variant='none'
                    style={{
                        backgroundImage: `url(${oriPicture})`,
                    }}
                    title='תמונה של אורי סקוזה'
                />
                <PartyMemberInfo>
                    <PartyMemberTitle>
                        <h3>אורי סקוזה /</h3>
                        <h4>ביטחון ועסקים</h4>
                    </PartyMemberTitle>
                    <p>
                        אעסוק בחיזוק הביטחון האישי והרכושי בישוב. גייסנו מומחי
                        שב"כ, כוחות הביטחון ומומחי אבטחה למטרה ונפעל לכך מידית
                        עם בחירתנו. אקדם את המגזר העסקי בישוב באמצעות הקמת
                        פורומים וחשיבה מערכתית. אקדם את דור המייסדים ובעזרתו
                        נכפיל כוח בכל תחומי החיים בישוב.
                    </p>
                </PartyMemberInfo>
            </PartyMember>

            <PartyMember variant='left'>
                <PartyMemberInfo>
                    <PartyMemberTitle>
                        <h3>לימור שגב /</h3>
                        <h4>תרבות וקהילה</h4>
                    </PartyMemberTitle>
                    <p>
                        כמי שבאה מעולם התרבות ופעלתי שנים רבות בתחום, בין היתר
                        במסגרת עבודתי בחברה לתרבות חמש, אקדם את תחום החוגים,
                        הפסטיבלים הפתוחים, אירועים ופעילויות חברתיים רחבים
                        ומגוונים, וזאת לכלל הגלאים- מטף ועד לגיל השלישי.
                    </p>
                </PartyMemberInfo>
                <PartyMemberPicture
                    variant='switch-place'
                    style={{
                        backgroundImage: `url(${limorPicture})`,
                    }}
                    title='תמונה של לימור שגב'
                />
            </PartyMember>

            <PartyMember variant='right'>
                <PartyMemberPicture
                    variant='none'
                    style={{
                        backgroundImage: `url(${dividPicture})`,
                    }}
                    title='תמונה של דוד סולומן'
                />
                <PartyMemberInfo>
                    <PartyMemberTitle>
                        <h3>דוד סולומן /</h3>
                        <h4>איכות הסביבה</h4>
                    </PartyMemberTitle>

                    <p>
                        אפעל בתחום התחבורה ואיכות הסביבה ופעילות "ירוקה" בישוב.
                        אקדם טיפוח הריאות הירוקות בישוב לרבות נטיעת עצים לצורכי
                        הצללה והורדת מעלות החום. אקדם תוכניות ביער שוהם לצורך
                        הפיכתו כמוקד בילוי משפחתי וכמרכז ארצי לשוחרי טבע, ואף
                        להשמישו כמרכז רכיבה על אופניים, כמוקד להולכים בשביל חוצה
                        ישראל, גם להעמידו לחינוך לשימוש נכון בטבע וכן לשמר את
                        פנינת הטבע באזור המטווח הישן. אפעל לקדם את היישוב להובלה
                        בתחום האנרגיה הירוקה, מחזור, הקמת עמדות טעינה לרכבים
                        חשמליים ושמירת הישוב כמקום "ירוק" מטופח ונקי.
                        <br />
                        אפעל לקידום התחבורה הציבורית והשיתופית בישוב פנימה
                        ולמוקדים מרכזיים- רכבת ישראל, חניון הנתיב המהיר וכו'.
                    </p>
                </PartyMemberInfo>
            </PartyMember>

            <PartyMember variant='left'>
                <PartyMemberInfo>
                    <PartyMemberTitle>
                        <h3>רחל דהן /</h3>
                        <h4>חינוך לגיל הרך</h4>
                    </PartyMemberTitle>
                    <p>
                        כמנהלת מזה שנים רבות בתחום החינוך לגיל הרך ומהכרותי רבת
                        השנים עם היישוב שוהם,
                        <br />
                        אני אפעל לקדם את כל אותם נושאים העומדים על הפרק בתחום
                        הגיל הרך, לרבות מציאת פתרונות לכלל ילדי הישוב וכן גם
                        לצוות המטפלים והמטפלות. אעניק מהידע הרב שלי בתחום על מנת
                        לדאוג לחינוך ערכי ומיטבי למען דור העתיד בשוהם.
                    </p>
                </PartyMemberInfo>
                <PartyMemberPicture
                    variant='switch-place'
                    style={{
                        backgroundImage: `url(${rachelPicture})`,
                    }}
                    title='תמונה של רחל דהן'
                />
            </PartyMember>

            <PartyMember variant='right'>
                <PartyMemberPicture
                    variant='none'
                    style={{
                        backgroundImage: `url(${meniPicture})`,
                    }}
                    title='תמונה של מני שחק'
                />
                <PartyMemberInfo>
                    <PartyMemberTitle>
                        <h3>מני שחק /</h3>
                        <h4>ספורט</h4>
                    </PartyMemberTitle>
                    <p>
                        כמאמן ספורט מקצועי אפעל לקידום הספורט ואורח חיים בריא
                        בישוב. אפעל להקמת פעילויות ספורט לגוף ולנפש לכלל הגילאים
                        והנגשת הספורט לכל גווני הקהילה, מילדים ונוער ועד לגיל
                        השלישי. נקיים אירועי ספורט חברתיים, לרבות אירועי הנצחה
                        חשובים.
                    </p>
                </PartyMemberInfo>
            </PartyMember>

            <PartyMember variant='left'>
                <PartyMemberInfo>
                    <PartyMemberTitle>
                        <h3>גלית שביט אהרונוביץ /</h3>
                        <h4>תרבות, חינוך וקיימות</h4>
                    </PartyMemberTitle>
                    <p>
                        כדתייה, אני מתכוונת לפעול לקירוב לבבות בין דתיים
                        לחילוניים בכל תחומי החיים.
                        <br />
                        כמנטורית לכלכת משפחה ולנערים בסיכון אקדם בתחום הזה את
                        הישוב, תוך מתן מענה רחב להקניית כלים וליווי לכלל
                        הגילאים. אפעל להקמת מרחב חדשני להעצמת מגוון קהלים
                        ותושבים.
                        <br />
                        אקדם תוכניות לנטיעת עצים נותני צל ברחבי היישוב, לשיפור
                        איכות החיים ויצירת מרחב אורבני מעודד ספורט, חוויה
                        משפחתית ואינטרקציה חברתית.
                    </p>
                </PartyMemberInfo>
                <PartyMemberPicture
                    variant='switch-place'
                    style={{
                        backgroundImage: `url(${galitPicture})`,
                    }}
                    title='תמונה של גלית שביט אהרונוביץ'
                />
            </PartyMember>

            <PartyMember variant='right'>
                <PartyMemberPicture
                    variant='none'
                    style={{
                        backgroundImage: `url(${galPicture})`,
                    }}
                    title='תמונה של גל שחר'
                />
                <PartyMemberInfo>
                    <PartyMemberTitle>
                        <h3>גל שחר /</h3>
                        <h4>צעירים</h4>
                    </PartyMemberTitle>
                    <p>
                        כצעיר החברים בסיעה וכמי שהתחנך ביישוב הנושא קרוב לליבי,
                        אקדם את פעילות הצעירים ומיצוי יכולותיהם בקהילה ובמערכות
                        הלימודיות. אבחן את מכלול צרכי הצעירים בפנאי ונופש ואתן
                        להם מענה. אפעל לקידום משרתי הצבא ומרשתי שנת השירות וכן
                        קידום הסטודנטים בישוב.
                    </p>
                </PartyMemberInfo>
            </PartyMember>

            <PartyMember variant='left'>
                <PartyMemberInfo>
                    <PartyMemberTitle>
                        <h3>ניצה שרעבי /</h3>
                        <h4>חינוך</h4>
                    </PartyMemberTitle>
                    <p>
                        כאשת חינוך בתחומי החינוך הרגיל והמיוחד, אקדם ואשפר את
                        תחומי הלמידה השונים והכל תוך שיתוף והדרכת ההורים, הבאת
                        כלל התלמידים להישגים חברתיים, לימודיים ורגשיים בגישות
                        ודרכים חדשניות, תוך למידה דיפריאנציאלית בתוך כותלי בית
                        הספר ומחוצה להם, לרבות בטבע. אסייע בהתמודדיות עם קשיים
                        אישיים ולימודיים תוך יצירת פתרונות מגוונים אשר יובילו
                        ללימוד עצמאי בתחומים הכלכליים, החברתיים והרגשיים.
                    </p>
                </PartyMemberInfo>
                <PartyMemberPicture
                    variant='switch-place'
                    style={{
                        backgroundImage: `url(${nitzaPicture})`,
                    }}
                    title='תמונה של ניצה שרעבי'
                />
            </PartyMember>

            <PartyMember variant='right'>
                <PartyMemberPicture
                    variant='none'
                    style={{
                        backgroundImage: `url(${yoelPicture})`,
                    }}
                    title='תמונה של יואל אמיר'
                />
                <PartyMemberInfo>
                    <PartyMemberTitle>
                        <h3>יואל אמיר /</h3>
                        <h4>קשרי חוץ ותעשייה</h4>
                    </PartyMemberTitle>
                    <p>
                        כיזם וכמי שפעל שנים ארוכות בחברות בינ"ל אפעל לקידום תחום
                        העסקים הקטנים והבינוניים בישוב וכן את מרכזי העסקים
                        באזורי התעשייה. אפעל לקדם יוזמות ושיתופי פעולה בינ"ל ואת
                        חזון הסיעה להפיכת תושבי שוהם ל"אזרח גלובלי".
                    </p>
                </PartyMemberInfo>
            </PartyMember>

            <PartyMember variant='left'>
                <PartyMemberInfo>
                    <PartyMemberTitle>
                        <h3>אפי בן נתן /</h3>
                        <h4>גמלאים</h4>
                    </PartyMemberTitle>
                    <p>
                        אחרי שנים כראש ענף תנאי שירות חובה ומילואים בדרגת סגן
                        אלוף, כחבר לשעבר בוועדת העבודה והרווחה של הכנסת וכבן
                        הישוב עשרות שנים, אקדם את תחומי הרווחה בדגש על גימלאי
                        הישוב והגיל השלישי, התרבות והחינוך.
                    </p>
                </PartyMemberInfo>
                <PartyMemberPicture
                    variant='switch-place'
                    style={{
                        backgroundImage: `url(${effiPicture})`,
                    }}
                    title='תמונה של אפי בן נתן'
                />
            </PartyMember>

            <PartyMember variant='right'>
                <PartyMemberPicture
                    variant='none'
                    style={{
                        backgroundImage: `url(${michalPicture})`,
                    }}
                    title='תמונה של מיכל פיקרסקי'
                />
                <PartyMemberInfo>
                    <PartyMemberTitle>
                        <h3>מיכל פיקרסקי /</h3>
                        <h4>רווחה ומשפחות מיוחדות</h4>
                    </PartyMemberTitle>
                    <p>
                        בראייתי שוהם צריכה ויכולה להיות הקהילה שבה יש מקום לכל
                        אדם, תוך אמונה בזכותו ובחובתו להיות ולחיות את חייו
                        במלואם. השונות והגיוון בנינו הם אלו שבונים, מעשירים
                        ומיטיבים את עולמנו. התפקיד שלנו הוא ליצור, לבנות, לחזק
                        ולתחזק את הקהילה ואת הפרטים החיים בה.
                    </p>
                </PartyMemberInfo>
            </PartyMember>
        </>
    );
};

export default PartyPlatform;

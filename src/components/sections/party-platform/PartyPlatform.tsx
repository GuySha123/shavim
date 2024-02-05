import { MemberDescription } from '../../../data/member-data';
import eitanPicture from '../../../assets/photos/party-members/eitan-no-background.png';
import {
    HeadPartyContainter,
    HeadPartyMemberPicture,
    HeadPartySpeach,
    PartyMember,
    PartyMemberInfo,
    PartyMemberPicture,
    PartyMemberTitle,
    YellowLine,
} from './PartyPlatform.styles';
const DoubleBreak = () => (
    <>
        <br />
        <br />
    </>
);

type PartyPlatformProps = {
    data: MemberDescription[];
};

const PartyPlatform = ({ data }: PartyPlatformProps) => {
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
                        <b>חברים ושותפים לדרך,</b>
                        <br />
                        לאחר קדנציה בת חמש שנים בהתנדבות מלאה, שהייתה עתירת
                        פעילות והצלחות לטובת האנשים המיוחדים בשוהם, אני מתרגש
                        ושמח להוביל בשנית את סיעת שווים להמשך העשייה המבורכת
                        למען אנשים מיוחדים ולכל קהילת שוהם באשר היא.
                        <DoubleBreak />
                        גיבשנו רשימה המורכבת מחברים נפלאים, משכמם ומעלה, בעלי
                        יכולות, ניסיון מקצועי וידע רב, שיפעלו לטובת היישוב בכל
                        תחומי החיים.
                        <br /> כמו כן אני מבטיח לחבור לכל ראש מועצה שייבחר
                        לתפקיד ויחדיו לקדם את שוהם לחיים איכותיים לטובת כל
                        הקהילה.
                        <DoubleBreak />
                        אני קורא לכולכם להתנדב ולעזור לנו במסע הבחירות, כי כל
                        קול וכל עזרה חשובה להמשך המסע שהתחיל לפני 5 שנים.
                        <br />
                        בבחירות הקרובות כולנו שמים ש' לסיעת שווים בקלפי
                        <br />
                        <b>איתן ליליוס יו"ר סיעת שווים</b>
                    </p>
                </HeadPartySpeach>
            </HeadPartyContainter>
            <YellowLine />

            {data.map((item, index) => (
                <PartyMember
                    key={index}
                    $variant={
                        index === 0
                            ? 'right'
                            : index % 2 !== 0
                            ? 'left'
                            : 'right'
                    }
                >
                    <PartyMemberPicture
                        $variant={
                            index === 0
                                ? 'none'
                                : index % 2 !== 0
                                ? 'switch-place'
                                : 'none'
                        }
                        $image={item.memberPic}
                        title={`${item.title}`}
                    />
                    <PartyMemberInfo>
                        <PartyMemberTitle>{item.name}</PartyMemberTitle>
                        <p>{item.description}</p>
                    </PartyMemberInfo>
                </PartyMember>
            ))}
        </>
    );
};

export default PartyPlatform;

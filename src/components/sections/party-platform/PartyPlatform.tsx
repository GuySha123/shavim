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

type MemberDescription = {
    name: string;
    title: string;
    description: string;
    speach: string;
};

type PartyPlatformProps = {
    data: MemberDescription[];
};

const PartyPlatform = ({ data }: PartyPlatformProps) => {
    const pictureImports = [
        oriPicture,
        limorPicture,
        dividPicture,
        rachelPicture,
        meniPicture,
        galitPicture,
        galPicture,
        nitzaPicture,
        yoelPicture,
        effiPicture,
        michalPicture,
    ];

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
                        style={{
                            backgroundImage: `url(${pictureImports[index]})`,
                        }}
                        title={`${item.title}`}
                    />
                    <PartyMemberInfo>
                        <PartyMemberTitle>{item.name}</PartyMemberTitle>
                        <p>{item.description}</p>
                        <p>{item.speach}</p>
                    </PartyMemberInfo>
                </PartyMember>
            ))}
        </>
    );
};

export default PartyPlatform;

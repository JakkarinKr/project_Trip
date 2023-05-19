import Card from "../component/Card/Card"
import Head from "next/head"
import styles from "../styles/All_Place.module.css"
const places = [
    {   
        title:"หมู่บ้านคีรีวง",
        imgURL:"https://www.makalius.co.th/wp-content/uploads/2018/02/02-7.jpg",
        googleURL:'https://www.google.com/maps/place/%E0%B8%AB%E0%B8%A1%E0%B8%B9%E0%B9%88%E0%B8%9A%E0%B9%89%E0%B8%B2%E0%B8%99%E0%B8%84%E0%B8%B5%E0%B8%A3%E0%B8%B5%E0%B8%A7%E0%B8%87/@8.4317931,99.7800774,16.5z/data=!4m10!1m2!2m1!1z4Lir4Lih4Li54LmI4Lia4LmJ4Liy4LiZ4LiE4Li14Lij4Li14Lin4LiH!3m6!1s0x3053ac397d24c091:0x4820f4d04e2a92e3!8m2!3d8.4324113!4d99.7825487!15sCirguKvguKHguLnguYjguJrguYnguLLguJnguITguLXguKPguLXguKfguIeSARJ0b3VyaXN0X2F0dHJhY3Rpb27gAQA!16s%2Fg%2F11c70c0c_7'
    },
    {
        title:"เกาะนุ้ยนอก ขนอม",
        imgURL:'https://www.makalius.co.th/wp-content/uploads/2018/02/03-7.jpg',
        googleURL:'https://www.google.co.th/maps/place/Ko+Noi/@9.3227986,99.7741447,15z/data=!4m14!1m7!3m6!1s0x3054669dd8d6c65b:0xd6d6f1eb9e815a03!2sKo+Noi!8m2!3d9.3227778!4d99.7844444!16s%2Fg%2F11bbswh4yn!3m5!1s0x3054669dd8d6c65b:0xd6d6f1eb9e815a03!8m2!3d9.3227778!4d99.7844444!16s%2Fg%2F11bbswh4yn?hl=en'
    },
    {
        title:"ประตูระบายน้ำอุทกวิภาชประสิทธิ",
        imgURL:'https://www.makalius.co.th/wp-content/uploads/2018/02/04-7.jpg',
        googleURL:'https://www.google.co.th/maps/place/Pak+Phanang+Canal+Floodgate+(Suea+Hueng)/@8.1977246,100.2390451,17.25z/data=!4m6!3m5!1s0x3052e77d428b365b:0x559ff9c4f39c4275!8m2!3d8.1975607!4d100.2403803!16s%2Fg%2F11q2s8vzrn?hl=en'
    },
    {
        title:'แหลมตะลุมพุก',
        imgURL:'https://www.makalius.co.th/wp-content/uploads/2018/02/05-12.jpg',
        googleURL:'https://www.google.com/maps/place/%E0%B8%AB%E0%B8%B2%E0%B8%94%E0%B8%97%E0%B8%A3%E0%B8%B2%E0%B8%A2+%E0%B8%9B%E0%B8%A5%E0%B8%B2%E0%B8%A2%E0%B9%81%E0%B8%AB%E0%B8%A5%E0%B8%A1%E0%B8%95%E0%B8%B0%E0%B8%A5%E0%B8%B8%E0%B8%A1%E0%B8%9E%E0%B8%B8%E0%B8%81/@8.4851891,100.1470032,12.75z/data=!4m15!1m8!3m7!1s0x30531bd6a3979833:0xfe1fc9b4f16312bf!2z4LmB4Lir4Lil4Lih4LiV4Liw4Lil4Li44Lih4Lie4Li44LiBIOC4reC4s-C5gOC4oOC4rSDguJvguLLguIHguJ7guJnguLHguIcg4LiZ4LiE4Lij4Lio4Lij4Li14LiY4Lij4Lij4Lih4Lij4Liy4LiK!3b1!8m2!3d8.4771087!4d100.1759285!16s%2Fg%2F11twdq_xv1!3m5!1s0x30531a9ad9df0ccf:0x54a2735e0f8305cd!8m2!3d8.5183267!4d100.1135273!16s%2Fg%2F11c1pvc2lp'
    },
    {
        title: "กำแพงเมืองเก่า",
        imgURL:'https://www.makalius.co.th/wp-content/uploads/2018/02/06-12.jpg',
        googleURL:'https://www.google.com/maps/place/%E0%B8%81%E0%B8%B3%E0%B9%81%E0%B8%9E%E0%B8%87%E0%B9%80%E0%B8%A1%E0%B8%B7%E0%B8%AD%E0%B8%87%E0%B9%80%E0%B8%81%E0%B9%88%E0%B8%B2+%E0%B8%99%E0%B8%84%E0%B8%A3%E0%B8%A8%E0%B8%A3%E0%B8%B5%E0%B8%98%E0%B8%A3%E0%B8%A3%E0%B8%A1%E0%B8%A3%E0%B8%B2%E0%B8%8A/@8.4268632,99.9572416,17z/data=!4m10!1m2!2m1!1z4LiB4Liz4LmB4Lie4LiH4LmA4Lih4Li34Lit4LiH4LmA4LiB4LmI4Liy!3m6!1s0x305301b062d86485:0x44550afbe235e707!8m2!3d8.427345!4d99.9609356!15sCirguIHguLPguYHguJ7guIfguYDguKHguLfguK3guIfguYDguIHguYjguLKSAQZtdXNldW3gAQA!16s%2Fg%2F11g0zx3trn'
    },
    {
        title:'วัดพระมหาธาตุวรมหาวิหาร',
        imgURL:'https://www.makalius.co.th/wp-content/uploads/2018/02/07-12.jpg',
        googleURL:'https://www.google.com/maps/place/%E0%B8%81%E0%B8%B3%E0%B9%81%E0%B8%9E%E0%B8%87%E0%B9%80%E0%B8%A1%E0%B8%B7%E0%B8%AD%E0%B8%87%E0%B9%80%E0%B8%81%E0%B9%88%E0%B8%B2+%E0%B8%99%E0%B8%84%E0%B8%A3%E0%B8%A8%E0%B8%A3%E0%B8%B5%E0%B8%98%E0%B8%A3%E0%B8%A3%E0%B8%A1%E0%B8%A3%E0%B8%B2%E0%B8%8A/@8.4268632,99.9572416,17z/data=!4m10!1m2!2m1!1z4LiB4Liz4LmB4Lie4LiH4LmA4Lih4Li34Lit4LiH4LmA4LiB4LmI4Liy!3m6!1s0x305301b062d86485:0x44550afbe235e707!8m2!3d8.427345!4d99.9609356!15sCirguIHguLPguYHguJ7guIfguYDguKHguLfguK3guIfguYDguIHguYjguLKSAQZtdXNldW3gAQA!16s%2Fg%2F11g0zx3trn',
    },
    {
        title:'ศาลหลักเมืองนคร',
        imgURL:'https://www.makalius.co.th/wp-content/uploads/2018/02/08-13.jpg',
        googleURL:'https://www.google.com/maps/place/%E0%B8%A8%E0%B8%B2%E0%B8%A5%E0%B8%AB%E0%B8%A5%E0%B8%B1%E0%B8%81%E0%B9%80%E0%B8%A1%E0%B8%B7%E0%B8%AD%E0%B8%87%E0%B8%99%E0%B8%84%E0%B8%A3%E0%B8%A8%E0%B8%A3%E0%B8%B5%E0%B8%98%E0%B8%A3%E0%B8%A3%E0%B8%A1%E0%B8%A3%E0%B8%B2%E0%B8%8A/@8.430358,99.9596362,17z/data=!3m1!4b1!4m6!3m5!1s0x305301e331a98eb7:0x8aad1ef89bc06672!8m2!3d8.430358!4d99.9622165!16s%2Fg%2F11rj69bqqx'
    },
    {
        title:'บ้านขุนรัฐวุฒิวิจารณ์',
        imgURL:'https://www.makalius.co.th/wp-content/uploads/2018/02/09-11.jpg',
        googleURL:'https://www.google.com/maps/place/%E0%B8%9A%E0%B9%89%E0%B8%B2%E0%B8%99%E0%B8%97%E0%B9%88%E0%B8%B2%E0%B8%99%E0%B8%82%E0%B8%B8%E0%B8%99/@8.4096133,99.9650415,17z/data=!3m1!4b1!4m6!3m5!1s0x3053010d1f1909c9:0xe93dcab5613a9239!8m2!3d8.4096133!4d99.9676218!16s%2Fg%2F1tdwbcdp'
    },
    {
        title:'บ้านหนังตะลุงสุชาติ',
        imgURL:'https://www.makalius.co.th/wp-content/uploads/2018/02/10-7.jpg',
        googleURL:'https://www.google.com/maps/place/%E0%B8%9A%E0%B9%89%E0%B8%B2%E0%B8%99%E0%B8%AB%E0%B8%99%E0%B8%B1%E0%B8%87%E0%B8%95%E0%B8%B0%E0%B8%A5%E0%B8%B8%E0%B8%87+%E0%B8%AA%E0%B8%B8%E0%B8%8A%E0%B8%B2%E0%B8%95%E0%B8%B4+%E0%B8%97%E0%B8%A3%E0%B8%B1%E0%B8%9E%E0%B8%A2%E0%B9%8C%E0%B8%AA%E0%B8%B4%E0%B8%99/@8.4146004,99.9679257,18.5z/data=!4m10!1m2!2m1!1z4Lia4LmJ4Liy4LiZ4Lir4LiZ4Lix4LiH4LiV4Liw4Lil4Li44LiH4Liq4Li44LiK4Liy4LiV4Li0!3m6!1s0x30530112d50413c9:0xf9468252ccd7cd3!8m2!3d8.4145836!4d99.9686689!15sCjnguJrguYnguLLguJnguKvguJnguLHguIfguJXguLDguKXguLjguIfguKrguLjguIrguLLguJXguLRaPiI84Lia4LmJ4Liy4LiZIOC4q-C4meC4seC4h-C4leC4sOC4peC4uOC4hyDguKrguLgg4LiK4Liy4LiV4Li0kgEVcGVyZm9ybWluZ19hcnRzX2dyb3VwmgEjQ2haRFNVaE5NRzluUzBWSlEwRm5TVU5wY0VwSGMyVjNFQUXgAQA!16s%2Fg%2F1hm3rng0q'
    },
    {
        title:'หอพระอิศวร หอพระนารายณ์',
        imgURL:'https://www.makalius.co.th/wp-content/uploads/2018/02/11-6.jpg',
        googleURL:'https://www.google.com/maps/place/%E0%B8%AB%E0%B8%AD%E0%B8%9E%E0%B8%A3%E0%B8%B0%E0%B8%AD%E0%B8%B4%E0%B8%A8%E0%B8%A7%E0%B8%A3/@8.4241709,99.9633553,19z/data=!4m14!1m7!3m6!1s0x3053013e6dc593e1:0xcc8637df6df4634f!2z4Lir4Lit4Lie4Lij4Liw4Lit4Li04Lio4Lin4Lij!8m2!3d8.424182!4d99.9636994!16s%2Fg%2F1tcwzbld!3m5!1s0x3053013e6dc593e1:0xcc8637df6df4634f!8m2!3d8.424182!4d99.9636994!16s%2Fg%2F1tcwzbld'
    },
    {
        title:'วัดธาตุน้อย',
        imgURL:'https://www.makalius.co.th/wp-content/uploads/2018/02/12-4.jpg',
        googleURL:'https://www.google.com/maps/place/%E0%B8%A7%E0%B8%B1%E0%B8%94%E0%B8%98%E0%B8%B2%E0%B8%95%E0%B8%B8%E0%B8%99%E0%B9%89%E0%B8%AD%E0%B8%A2/@8.3732561,99.5402021,17z/data=!4m14!1m7!3m6!1s0x3053caaa2e02b277:0xb71c334c855250fe!2z4Lin4Lix4LiU4LiY4Liy4LiV4Li44LiZ4LmJ4Lit4Lii!8m2!3d8.3732561!4d99.5427824!16s%2Fg%2F1tf62xt1!3m5!1s0x3053caaa2e02b277:0xb71c334c855250fe!8m2!3d8.3732561!4d99.5427824!16s%2Fg%2F1tf62xt1'
    },
    {
        title:'กุฏิทรงไทยวัดวังตะวันตก',
        imgURL:'https://www.makalius.co.th/wp-content/uploads/2018/02/13-4.jpg',
        googleURL:'https://www.google.com/maps/place/%E0%B8%81%E0%B8%B8%E0%B8%8F%E0%B8%B4%E0%B8%97%E0%B8%A3%E0%B8%87%E0%B9%84%E0%B8%97%E0%B8%A2%E0%B8%A7%E0%B8%B1%E0%B8%94%E0%B8%A7%E0%B8%B1%E0%B8%87%E0%B8%95%E0%B8%B0%E0%B8%A7%E0%B8%B1%E0%B8%99%E0%B8%95%E0%B8%81/@8.4383714,99.9601275,18z/data=!4m6!3m5!1s0x305301314069dd95:0x688a7a15750727cf!8m2!3d8.4382812!4d99.9617927!16s%2Fg%2F1hm3vv_8w'
    },
    {
        title:'ตลาดย้อนยุคปากพนัง',
        imgURL:'https://www.makalius.co.th/wp-content/uploads/2018/02/14-4.jpg',
        googleURL:'https://www.google.com/maps/place/%E2%80%AA%E0%B8%95%E0%B8%A5%E0%B8%B2%E0%B8%94%E0%B8%A2%E0%B9%89%E0%B8%AD%E0%B8%99%E0%B8%A2%E0%B8%B8%E0%B8%84%E0%B8%9B%E0%B8%B2%E0%B8%81%E0%B8%9E%E0%B8%99%E0%B8%B1%E0%B8%87%E2%80%AC/@8.3556137,100.1964101,17z/data=!4m14!1m7!3m6!1s0x30531e26cf9b70a9:0x3c173d6f0c62c4ee!2z4oCq4LiV4Lil4Liy4LiU4Lii4LmJ4Lit4LiZ4Lii4Li44LiE4Lib4Liy4LiB4Lie4LiZ4Lix4LiH4oCs!8m2!3d8.3556137!4d100.1989904!16s%2Fg%2F11cn8zhksx!3m5!1s0x30531e26cf9b70a9:0x3c173d6f0c62c4ee!8m2!3d8.3556137!4d100.1989904!16s%2Fg%2F11cn8zhksx'
    },
    {
        title:'ตลาด 100 ปี ปากพนัง',
        imgURL:'https://www.makalius.co.th/wp-content/uploads/2018/02/16-4.jpg',
        googleURL:'https://www.google.com/maps/place/%E0%B8%95%E0%B8%A5%E0%B8%B2%E0%B8%94%E0%B8%AA%E0%B8%94%E0%B9%80%E0%B8%97%E0%B8%A8%E0%B8%9A%E0%B8%B2%E0%B8%A5%E0%B9%80%E0%B8%A1%E0%B8%B7%E0%B8%AD%E0%B8%87%E0%B8%9B%E0%B8%B2%E0%B8%81%E0%B8%9E%E0%B8%99%E0%B8%B1%E0%B8%87+(100%E0%B8%9B%E0%B8%B5)/@8.3475203,100.1968196,17z/data=!4m14!1m7!3m6!1s0x3052e1d941157ce9:0x9b9a116b27caa489!2z4LiV4Lil4Liy4LiU4Liq4LiU4LmA4LiX4Lio4Lia4Liy4Lil4LmA4Lih4Li34Lit4LiH4Lib4Liy4LiB4Lie4LiZ4Lix4LiHICgxMDDguJvguLUp!8m2!3d8.3475203!4d100.1993999!16s%2Fg%2F1hm3ty_j6!3m5!1s0x3052e1d941157ce9:0x9b9a116b27caa489!8m2!3d8.3475203!4d100.1993999!16s%2Fg%2F1hm3ty_j6'
    },
    {
        title:'อุทยานแห่งชาติหาดขนอม-หมู่เกาะทะเลใต้',
        imgURL:'https://www.makalius.co.th/wp-content/uploads/2018/02/17-3.jpg',
        googleURL:'https://www.google.com/maps/place/%E0%B8%AD%E0%B8%B8%E0%B8%97%E0%B8%A2%E0%B8%B2%E0%B8%99%E0%B9%81%E0%B8%AB%E0%B9%88%E0%B8%87%E0%B8%8A%E0%B8%B2%E0%B8%95%E0%B8%B4%E0%B8%AB%E0%B8%B2%E0%B8%94%E0%B8%82%E0%B8%99%E0%B8%AD%E0%B8%A1-%E0%B8%AB%E0%B8%A1%E0%B8%B9%E0%B9%88%E0%B9%80%E0%B8%81%E0%B8%B2%E0%B8%B0%E0%B8%97%E0%B8%B0%E0%B9%80%E0%B8%A5%E0%B9%83%E0%B8%95%E0%B9%89/@9.1084599,99.9011998,17z/data=!4m6!3m5!1s0x30547ef7a763a89d:0xe8eecab4f027ab4e!8m2!3d9.1081527!4d99.902439!16s%2Fm%2F027t8tk'
    },
    {
        title:'เขาพลายดำ',
        imgURL:'https://www.makalius.co.th/wp-content/uploads/2018/02/18-3.jpg',
        googleURL:'https://www.google.com/maps/place/Khao+Phlai+Dam/@9.0780553,99.8832899,15z/data=!4m14!1m7!3m6!1s0x30547fdd9cd58611:0xffff85beef997cef!2sKhao+Phlai+Dam!8m2!3d9.0780556!4d99.8936111!16s%2Fg%2F1q5cccs08!3m5!1s0x30547fdd9cd58611:0xffff85beef997cef!8m2!3d9.0780556!4d99.8936111!16s%2Fg%2F1q5cccs08'
    },
    {
        title:'กรุงชิง',
        imgURL:'https://www.makalius.co.th/wp-content/uploads/2018/02/19-3.jpg',
        googleURL:'https://www.google.com/maps/place/%E0%B8%99%E0%B9%89%E0%B8%B3%E0%B8%95%E0%B8%81%E0%B8%81%E0%B8%A3%E0%B8%B8%E0%B8%87%E0%B8%8A%E0%B8%B4%E0%B8%87/@8.766368,99.6058226,12.5z/data=!4m15!1m8!3m7!1s0x3053915576c8993d:0x2ef85e804d6aac0b!2z4LiB4Lij4Li44LiH4LiK4Li04LiHIOC4leC4s-C4muC4pSDguIHguKPguLjguIfguIrguLTguIcg4Lit4Liz4LmA4Lig4LitIOC4meC4muC4nuC4tOC4leC4syDguJnguITguKPguKjguKPguLXguJjguKPguKPguKHguKPguLLguIogODAxNjA!3b1!8m2!3d8.7794435!4d99.6118667!16s%2Fg%2F11sk54j6xf!3m5!1s0x3053bd2a628a5689:0xa6f88d1bd37dc5fa!8m2!3d8.7112396!4d99.6944465!16s%2Fg%2F11sg5sv35f'
    },
    {
        title:'จุดชมวิวเขาธง',
        imgURL:'https://www.makalius.co.th/wp-content/uploads/2018/02/20-3.jpg',
        googleURL:'https://www.google.co.th/maps/place/%E0%B9%80%E0%B8%82%E0%B8%B2%E0%B8%98%E0%B8%87/@8.3266221,99.6473197,13z/data=!4m9!1m2!2m1!1z4LiI4Li44LiU4LiK4Lih4Lin4Li04Lin4LmA4LiC4Liy4LiY4LiH!3m5!1s0x30524d9e6210da6d:0xcad6d18ef428159b!8m2!3d8.3186111!4d99.7055556!16s%2Fg%2F12lsrk1ss?hl=en'
    },
    {
        title:'อุทยานแห่งชาติเขาหลวง',
        imgURL:'https://www.makalius.co.th/wp-content/uploads/2018/02/21-3.jpg',
        googleURL:'https://www.google.co.th/maps/place/Krungching+Waterfall/@8.7242534,99.6686564,16.75z/data=!4m14!1m7!3m6!1s0x3053962dcd49ec27:0xb82344e09410d120!2sKrungching+Waterfall!8m2!3d8.7240437!4d99.6679987!16s%2Fg%2F11r8_0k1t!3m5!1s0x3053962dcd49ec27:0xb82344e09410d120!8m2!3d8.7240437!4d99.6679987!16s%2Fg%2F11r8_0k1t?hl=en'
    }

]
export default function All_Place() {
    return (
        <div className={styles.container}>
            <Head>
                <title>ALL PLACE</title>
            </Head>
            <div className={styles.fillter_container}>
                
            </div>
            <div className={styles.content}>
                {places.map((place)=>{
                    return(
                        <Card data={place}/>
                    )
                })}
            </div>
        </div>
    )
}

import { AppleStore } from "../../assets/icons/apple"
import { GooglePlaymarket } from "../../assets/icons/play-market"
export const Footer = () => {
    return (
        <>
            <div className="container bg-[#eef4ff]">
                <div className="container h-70 flex gap-36">
                    <div className="flex flex-col gap-4 mt-8 ml-19">
                        <h3 className="font-bold text-[19px]">Платформа хақида</h3>
                        <p>Liber ўзи нима?</p>
                        <p>Фойдаланиш шартлари</p>
                        <p>Ёрдам</p>
                    </div>

                    <div className="flex flex-col gap-4 mt-8">
                        <h3 className="font-bold text-[19px]">Обуна хақида</h3>
                        <p>Обуна бўлиш</p>
                        <p>Қандай тўлаш</p>
                    </div>

                    <div className="flex flex-col gap-4 mt-8">
                        <h3 className="font-bold text-[19px]">Китоблар</h3>
                        <p>Аудио китоблар</p>
                        <p>Электрон китоблар</p>
                        <p>Китоблар</p>
                    </div>

                    <div className="flex flex-col gap-4 mt-8">
                        <h3 className="font-bold text-[19px]">Мобил илова</h3>
                        <GooglePlaymarket />
                        <AppleStore />
                    </div>


                </div>
            </div>
           
        </>
    )
}
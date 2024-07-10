import { Slider } from "@/components/ui/slider";
import { useState } from 'react';

type SliderProps = React.ComponentProps<typeof Slider>

const SliderPage = ({ className, ...props }: SliderProps) => {
    const [sliderValue, setSliderValue] = useState(10);
    const [rangeValue, setRangeValue] = useState([10, 20]);
    return (
        <div>
            <span>Slider value: {[sliderValue]}</span>
            <Slider
                defaultValue={[sliderValue]}
                max={100}
                step={1}
                onValueChange={(value) => setSliderValue(value[0])}
            /*     className={cn("w-[60%]", className)}
                {...props} */
            />

            <span>Range value: {rangeValue.join(',')}</span>
            <Slider
                defaultValue={rangeValue}
                max={100}
                step={1}
                onValueChange={setRangeValue}
            />
        </div>
    )
}

export default SliderPage;
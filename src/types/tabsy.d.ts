import { TabsyOptions } from './tabsy-options';
import { CSSSelector } from './shared';

interface Tabsy{
    params: TabsyOptions;
    enqueueTab(): void;
}

declare class Tabsy implements Tabsy{
    /**
     * Constructs a new Swiper instance.
     *
     * @param container Where Swiper applies to.
     * @param options   Instance options.
     */
    constructor(container: CSSSelector | HTMLElement, options?: TabsyOptions);
}

export default Tabsy;
/*
 / My portfolio site
 / Copyright (C) 2025  ChosenSoul
 /
 / This program is free software: you can redistribute it and/or modify
 / it under the terms of the GNU General Public License as published by
 / the Free Software Foundation, either version 3 of the License, or
 / (at your option) any later version.
 /
 / This program is distributed in the hope that it will be useful,
 / but WITHOUT ANY WARRANTY; without even the implied warranty of
 / MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 / GNU General Public License for more details.
 /
 / You should have received a copy of the GNU General Public License
 / along with this program.  If not, see <https://www.gnu.org/licenses/>.
*/
import React, { useEffect, useRef } from 'react';
import { type AutoTriggerProps } from '@components/AutoTrigger/AutoTriggerProps';

export const AutoTrigger: React.FC<AutoTriggerProps> = ({
    onVisible,
    children,
    variant = 'once',
    minH
}) => {
    const elementRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    onVisible();

                    if (variant === 'once' && elementRef.current) {
                        observer.unobserve(elementRef.current);
                    }
                }
            },
            {
                threshold: 0.1,
            }
        );

        const currentRef = elementRef.current;
        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
            observer.disconnect();
        };
    }, [onVisible, variant]);

    return (
        <div ref={elementRef} style={{ minHeight: minH }}>
            {children}
        </div>
    );
};

export default AutoTrigger;
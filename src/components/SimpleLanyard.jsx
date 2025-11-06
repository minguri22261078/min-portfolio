import React from "react";
import css from "./SimpleLanyard.module.css";

import hero from "@/assets/hero-3d.png";

export default function SimpleLanyard({
                                          name = "이민석",
                                          role = "Designer · Developer",
                                          badgeImg = hero,
                                          size = 0.75,
                                      }) {
    return (
        <div className={css.wrap} style={{ "--s": size }} aria-label="profile-lanyard">
            {/* 끈 */}
            <div className={css.strap} />
            {/* 카드 */}
            <div className={css.card}>
                <div className={css.photo}>
                    <img src={badgeImg} alt="" />
                </div>
                <div className={css.info}>
                    <strong className={css.name}>{name}</strong>
                    <span className={css.role}>{role}</span>
                </div>
            </div>
        </div>
    );
}
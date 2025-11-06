import React from "react";
import styles from "./IntroShowcase.module.css";
import SimpleLanyard from "@/components/SimpleLanyard.jsx";

import me from "@/assets/me.png";

import uni from "@/assets/3d/uni.png";
import high from "@/assets/3d/high.png";
import mid from "@/assets/3d/mid.png";
import cube3d from "@/assets/3d/cube-3d.png";
import mail3d from "@/assets/3d/mail.png";
import phone3d from "@/assets/3d/phone.png";
import home3d from "@/assets/3d/home.png";
import net3d from "@/assets/3d/net.png";

// tagItems: CONNECT 마키에 흘릴 항목(아이콘 + 텍스트)
export default function IntroGridFull({
                                          titleLines = ["이민석 - Persistence\nPROGRAMMER"],

                                          bullets = [
                                              "‘보여지는 디자인’을 넘어 사용자가 직접 체험하는 경험을 설계합니다.",
                                              "아이디어 발상부터 프로토타이핑, 인터랙션 구현까지 전 과정을 주도적으로 수행합니다.",
                                              "디자인과 기술의 경계를 허물며, 시각적 미학과 사용자 경험의 조화를 고민합니다.",
                                              "사람들이 자연스럽게 몰입하고 오래 기억할 수 있는 디지털 경험을 목표로 합니다."
                                          ],

                                          // ✅ CONNECT 마키용 (아이콘 + 텍스트)
                                          tagItems = [
                                              { icon: mail3d, text: "elmo0915@kaywon.ac.kr" },
                                              { icon: phone3d, text: "+82 10 3369 0701" },
                                              { icon: home3d,  text: "경기도 수원시" },
                                              { icon: net3d,   text: "@s3ok_mn" },
                                          ],

                                          // ✅ 우상 패널 3D 아이콘(학력)
                                          eduIcons = {
                                              uni:  uni,
                                              high: high,
                                              mid:  mid
                                          },

                                          // ✅ 우상 패널 우수작
                                          awardIcon = cube3d,
                                          award = {
                                              title: "3D 디자인",
                                              href: "https://cafe.naver.com/f-e/cafes/28411094/articles/228268?boardtype=L&menuid=880&referrerAllArticles=false",
                                              linkLabel: "우수작 링크",
                                          },

                                          images = { bottomLeft: me, bottomRight: "" },
                                      }) {
    return (
        <section className={styles.section}>
            {/* 좌상 — 타이틀 + CONNECT 슬림 마키 */}
            <div className={`${styles.cell} ${styles.titleCell}`}>
                <h2 className={styles.headline}>
                    {titleLines.map((t, i) => (
                        <span key={i} className={styles.titleLine}>{t}</span>
                    ))}
                </h2>

                {/* CONNECT 마키 (아이콘 + 텍스트) */}
                <div className={styles.slimTicker} aria-label="CONNECT">
                    <div className={styles.slimTrack} aria-hidden="true">
                        {tagItems.map((it, i) => (
                            <span key={`c1-${i}`} className={styles.ti}>
                {it.icon && <img src={it.icon} alt="" />}
                                {it.text}
              </span>
                        ))}
                    </div>
                    <div className={styles.slimTrack}>
                        {tagItems.map((it, i) => (
                            <span key={`c2-${i}`} className={styles.ti}>
                {it.icon && <img src={it.icon} alt="" />}
                                {it.text}
              </span>
                        ))}
                    </div>
                </div>
            </div>

            {/* ✅ 우상 — 학력 / 우수작 (3D 아이콘 사용) */}
            <div className={`${styles.cell} ${styles.blockTopRight}`}>
                <div className={styles.panel}>
                    <div className={styles.col}>
                        <h4 className={styles.panelTitle}>학력</h4>
                        <ul className={styles.eduList}>
                            <li>
                                <img src={eduIcons.uni} alt="" />
                                <div>
                                    <div className={styles.eduMain}>계원예술대학교 졸업 예정</div>
                                    <div className={styles.eduSub}>2026년 02월</div>
                                </div>
                            </li>
                            <li>
                                <img src={eduIcons.high} alt="" />
                                <div>
                                    <div className={styles.eduMain}>성복고등학교 졸업</div>
                                    <div className={styles.eduSub}>2020년 02월</div>
                                </div>
                            </li>
                            <li>
                                <img src={eduIcons.mid} alt="" />
                                <div>
                                    <div className={styles.eduMain}>성서중학교 졸업</div>
                                    <div className={styles.eduSub}>2017년 02월</div>
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div className={styles.col}>
                        <h4 className={styles.panelTitle}>우수작</h4>
                        <div className={styles.award}>
                            <img src={awardIcon} alt="" />
                            <div className={styles.awardBody}>
                                <div className={styles.eduMain}>{award.title}</div>
                                <a className={styles.link} href={award.href} target="_blank" rel="noreferrer">
                                    {award.linkLabel}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.vLabelRight}>INFO</div>
            </div>

            {/* 좌하 — ABOUT */}
            <div className={`${styles.cell} ${styles.blockBottomLeft}`}>
                <div className={styles.blockTitle}>ABOUT</div>
                <ul className={styles.bullets}>
                    {bullets.map((b, i) => <li key={i}>{b}</li>)}
                </ul>
            </div>

            {/* 중앙 세로 — 포트레이트(두 행 관통) */}
            <div className={`${styles.cell} ${styles.imgTall}`}>
                {images.bottomLeft ? (
                    <img src={images.bottomLeft} alt="" className={styles.portrait} />
                ) : (
                    <div className={styles.ph}>Add image (portrait)</div>
                )}
            </div>

            {/* 우하 — 보조 이미지(선택) */}
            <div className={`${styles.cell} ${styles.imgRight}`}>
                <SimpleLanyard />
                <div className={styles.vLabelFarRight}>PROFILE</div>
            </div>

            <div className={styles.grain} aria-hidden />
        </section>
    );
}
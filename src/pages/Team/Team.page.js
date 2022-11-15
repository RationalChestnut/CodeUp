import React from "react";
import styles from "./Team.module.css";
import { listOfMembers } from "../../data/team.data";
import { Member } from "./Member.component";
export const Team = () => {
  return (
    <div className={styles.teamPageContainer}>
      <h1 className={styles.mainText}>Meet the team</h1>
      <div className={styles.teamContainer}>
        {listOfMembers.map((member, index) => (
          <Member member={member} />
        ))}
      </div>
    </div>
  );
};

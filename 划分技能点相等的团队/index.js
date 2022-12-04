/**
 *  6254. 划分技能点相等的团队
 * 
 */


/**
 * @param {number[]} skill
 * @return {number}
 */
 var dividePlayers = function(skill) {
    skill.sort((a,b) => a-b);
    // 所有团队的化学反应之和
    let multSum = 0;
    // 团队数量
    let teamNumber = skill.length / 2;
    // 第1个团队的技能点之和
    let teamSkillSum = skill[0] + skill[skill.length - 1];
    // 最后一个团队的index
    let lastSkillNo = skill.length - 1;
    for(let i=0; i < teamNumber; i++) {
        if((skill[i]+skill[lastSkillNo-i]) !== teamSkillSum) return -1;
        multSum += skill[i]*skill[lastSkillNo-i];
    }
    return multSum;
};

let skill = [1,1,2,3];
let res = dividePlayers(skill);
console.log('res:',res);
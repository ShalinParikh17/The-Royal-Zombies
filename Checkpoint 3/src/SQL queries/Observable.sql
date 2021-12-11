DROP table  if exists abc1;

create temp table abc1 as (select dof.gender, dof.rank, dof.race, dof.current_salary, (2021 - dof.birth_year) as age, doa.final_finding
from data_officer dof
join data_officerallegation doa on dof.id = doa.officer_id);

SELECT coalesce(age, 0) FROM abc1;
select * from abc1;


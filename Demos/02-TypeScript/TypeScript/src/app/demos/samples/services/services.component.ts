import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import axios from 'axios'; //alias import
import { environment } from '../../../../environments/environment';
import { Skill } from '../skills/skill.model';
import { SkillsService } from '../skills/skills.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
})
export class ServicesComponent {
  // antipattern - use environment.ts
  skillsapi = 'http://localhost:3000/skills';
  skills: Skill[];

  // direct data access in components is an antipattern
  constructor(private skillsService: SkillsService, private http: HttpClient) {}

  usingFetch() {
    //using fetch in angular is an antipattern
    fetch(this.skillsapi)
      .then((resp: Response) => {
        console.log('Response received from fetch', resp);
        return resp.json(); // Notice Response Object
      })
      .then((data: Skill[]) => {
        console.log('Data received from fetch', data);
      });
  }

  usingFetchAwait() {
    async function getSkills() {
      const response = await fetch(environment.skillsApi);
      const skills = await response.json();
      console.log('Data received using fetch - await', skills);
    }

    getSkills();
  }

  postFetch() {
    const param: Skill = {
      name: 'Azure',
      completed: true,
    };

    const options = {
      method: 'POST',
      body: JSON.stringify(param),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    };

    fetch(`${environment.api}/skills`, options)
      .then(function (res) {
        if (res.ok) {
          return res.statusText;
        } else {
          throw Error(`Request rejected with status ${res.status}`);
        }
      })
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  }

  async usingAxios() {
    const api = this.skillsapi;

    await axios.get(api).then((result) => console.log(result.data));

    const param: Skill = {
      name: 'Azure',
      completed: true,
    };

    axios.post(api, param);
  }

  // antipattern - try to keep data operation in services
  useClientInComponent() {
    //untyped
    this.http
      .get(environment.skillsApi)
      .subscribe((data: Skill[]) => console.log(data));

    //typed - preferred pattern to use get<T>
    this.http
      .get<Skill[]>(environment.skillsApi)
      .subscribe((data) => console.log(data));
  }

  consumeService() {
    // just to show the subscription
    let subscription = this.skillsService.getSkills().subscribe();
    console.log('skills obs: ', subscription);

    // assign to prop in component for use in template
    // subscribe return the native type that was wrapped in the observable
    this.skillsService.getSkills().subscribe((data) => {
      this.skills = data;
    });
  }
}

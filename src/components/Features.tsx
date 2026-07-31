import FeatureRow from './FeatureRow';
import { features } from '@/data';

export default function Features() {
  return (
    <div>
      {features.map((f) => (
        <FeatureRow key={f.id} feature={f} />
      ))}
    </div>
  );
}
